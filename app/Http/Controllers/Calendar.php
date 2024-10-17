CalendarController.php

<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class CalendarController extends Controller
{
    public function index()
    {
        $events = Event::all();
        return view('calendar.index', compact('events'));
    }

    public function show($id)
    {
        $event = Event::findOrFail($id);
        return view('calendar.show', compact('event'));
    }

    public function edit($id)
    {
        $event = Event::findOrFail($id);
        $this->authorize('update', $event);
        return view('calendar.edit', compact('event'));
    }

    public function update(Request $request, $id)
    {
        $event = Event::findOrFail($id);
        $this->authorize('update', $event);

        $validatedData = $request->validate([
            'title' => 'required|max:255',
            'description' => 'required',
            'start_date' => 'required|date',
            'end_date' => 'required|date|after:start_date',
            'location' => 'required',
            'capacity' => 'required|integer|min:1',
        ]);

        $event->update($validatedData);

        return redirect()->route('calendar.show', $event->id)->with('success', 'Notikums veiksmīgi atjaunināts.');
    }

    public function destroy($id)
    {
        $event = Event::findOrFail($id);
        $this->authorize('delete', $event);

        $event->delete();

        return redirect()->route('calendar.index')->with('success', 'Notikums veiksmīgi dzēsts.');
    }

    public function getEvents(Request $request)
    {
        $start = $request->input('start');
        $end = $request->input('end');

        $events = Event::whereBetween('start_date', [$start, $end])->get();

        $formattedEvents = $events->map(function ($event) {
            return [
                'id' => $event->id,
                'title' => $event->title,
                'start' => $event->start_date,
                'end' => $event->end_date,
                'url' => route('calendar.show', $event->id),
            ];
        });

        return response()->json($formattedEvents);
    }
}