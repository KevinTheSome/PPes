<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'organizer_id',
        'title',
        'description',
        'start_time',
        'end_time',
        'location',
        'capacity',
    ];

    protected $casts = [
        'start_time' => 'datetime',
        'end_time' => 'datetime',
    ];

    public function organizer()
    {
        return $this->belongsTo(User::class, 'organizer_id');
    }

    public function rsvps()
    {
        return $this->hasMany(RSVP::class);
    }

    public function attendees()
    {
        return $this->belongsToMany(User::class, 'rsvps')->withPivot('status');
    }
}