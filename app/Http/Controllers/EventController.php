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

        return json_encode(Event::findOrFail($request->id)->where('organizer_id', Auth::user()->id));
    }

    public function create(Request $request)
    {
        Event::create($request->all());
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
