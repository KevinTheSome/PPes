<?php

namespace App\Http\Controllers;
use Auth;
use Storage;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function index()
    {
        return json_encode(Event::all()->where('organizer_id', Auth::user()->id));
    }

    public function show(Request $request)
    {

        return json_encode(Event::findOrFail($request->id)->where('organizer_id', Auth::user()->id));
    }


    public function create(Request $request)
    {
        $event = new Event();

        $images = $request->file('image');
        $imagePath = [];
        foreach ($images as $image) {
            $imagePath[] = $image->store('events', 'public');
        }
        
        $event->organizer_id = $request->organizer_id;
        $event->images = json_encode($imagePath);
        $event->title = $request->title;
        $event->description = $request->description;
        $event->start_time = $request->start_time;
        $event->end_time = $request->end_time;
        $event->location = $request->location;
        $event->capacity = $request->capacity;

        $event->save();
    }

    public function edit(Request $request)
    {
        Event::findorfail($request->id)->where('organizer_id', Auth::user()->id)->update($request->all());
    }

    public function destroy(Request $request)
    {
        Event::findorfail($request->id)->where('organizer_id', Auth::user()->id)->delete();
    }



}
