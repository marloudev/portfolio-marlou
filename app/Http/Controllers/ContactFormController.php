<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Notifications\ContactFormNotification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Notification;  // Make sure Notification is imported

class ContactFormController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name'  => 'required|string|max:255',
            'email'      => 'required|email',
            'mobile'     => 'required|digits_between:10,15',
            'message'    => 'required|string|min:10',
        ]);

        // Send the notification to a specific user or a group of users (you can change this logic)
        // Example: send to a hardcoded user or a list of users.
        $user = User::find(1);  // Replace with the correct logic to get the user(s)

        if ($user) {
            $user->notify(new ContactFormNotification($validated));
        }

        return response()->json(['message' => 'Form submitted successfully.']);
    }
}
