<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventsTable extends Migration
{
    public function up()
    {
        Schema::create('events', function (Blueprint $table) {
            $table->id();
            $table->text('images');
            $table->string('title');
            $table->text('description');
            $table->dateTime('start_time');
            $table->dateTime('end_time');
            $table->string('location');
            $table->integer('capacity');
            $table->foreignId('organizer_id')->constrained('users');
            $table->timestamps();
        });
    }
    public function down()
    {
        Schema::dropIfExists('events');
    }

};