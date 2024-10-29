<?php

namespace App\Http\Controllers;
use Auth;
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
        $event = Event::findOrFail($request->id);
        $images = json_decode($event->images);
        return response()->json(['event' => $event, 'images' => $images]);
    }


    public function create(Request $request)
    {
        $event = new Event();


        $request->validate([
            'organizer_id' => 'required',
            'title' => 'required',
            'description' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'location' => 'required',
            'capacity' => 'required',
            'images.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

        ]);

        $images = $request->file('image');
        $imagePath = [];
        foreach ($images as $image) {
            $imagePath[] = "/storage/" . $image->store('events', 'public');
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

    public function edit(Request $request, $id)
    {
        $event = Event::findorfail($id);
        return Inertia::render('Events/Edit', ['event' => $event]);

    }

    public function update(Request $request, $id)
    {
        $event = Event::findorfail($request->id)->where('organizer_id', Auth::user()->id);

        $request->validate([
            'organizer_id' => 'required',
            'title' => 'required',
            'description' => 'required',
            'start_time' => 'required',
            'end_time' => 'required',
            'location' => 'required',
            'capacity' => 'required',
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);


        $images = $request->file('image');
        $imagePath = [];
        foreach ($images as $image) {
            $imagePath[] = "/storage/" . $image->store('events', 'public');
        }

        $event->organizer_id = $request->organizer_id;
        $event->title = $request->title;
        $event->images = json_encode($imagePath);
        $event->description = $request->description;
        $event->start_time = $request->start_time;
        $event->end_time = $request->end_time;
        $event->location = $request->location;
        $event->capacity = $request->capacity;

        $event->save();

    }

    public function destroy(Request $request)
    {
        Event::findorfail($request->id)->where('organizer_id', Auth::user()->id)->delete();
    }



}
