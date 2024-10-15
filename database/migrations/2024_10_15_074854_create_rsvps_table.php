<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRsvpsTable extends Migration
{
    public function up()
    {
        Schema::create('rsvps', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained('users');
            $table->foreignId('event_id')->constrained('events');
            $table->enum('status', ['attending', 'waitlist'])->default('attending');
            $table->timestamps();

            $table->unique(['user_id', 'event_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('rsvps');
    }
};