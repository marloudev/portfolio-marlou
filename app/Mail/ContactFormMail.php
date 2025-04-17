<?php

namespace App\Notifications;

use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class ContactFormMail extends Notification
{
    protected $formData;

    public function __construct(array $formData)
    {
        $this->formData = $formData;
    }

    public function via($notifiable)
    {
        return ['mail'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->greeting('Hello!')
            ->line('You have received a new contact form submission.')
            ->line('First Name: ' . $this->formData['first_name'])
            ->line('Last Name: ' . $this->formData['last_name'])
            ->line('Email: ' . $this->formData['email'])
            ->line('Mobile: ' . $this->formData['mobile'])
            ->line('Message: ' . $this->formData['message'])
            ->line('Thank you for using our application!');
    }
}
