<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class ContactFormNotification extends Notification implements ShouldQueue
{
    use Queueable;

    protected $formData;

    /**
     * Create a new notification instance.
     *
     * @param  array  $formData
     * @return void
     */
    public function __construct(array $formData)
    {
        $this->formData = $formData;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  object  $notifiable
     * @return array<int, string>
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  object  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable): MailMessage
    {
        return (new MailMessage)
            ->subject('New Contact Form Submission')
            ->greeting('Hello, Marlou Flores Pepito!')
            ->line('You have received a new contact form submission:')
            ->line('Name: ' . $this->formData['first_name'] . ' ' . $this->formData['last_name'])
            ->line('Email: ' . $this->formData['email'])
            ->line('Mobile: ' . $this->formData['mobile'])
            ->line('Message: ' . $this->formData['message'])
            // ->action('View the Submission', url('/contact-form'))
            ->line('Thank you for using our application!');
    }

}
