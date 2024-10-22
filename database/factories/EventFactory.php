<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Event>
 */
class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $images = [];
        for ($i = 0; $i < rand(1, 5); $i++) {
            $images[] = 'image-' . $i . '.jpg';
        }
        return [
            'organizer_id' => User::all()->random()->id,
            'title' => $this->faker->sentence(),
            'images' => json_encode($images),
            'description' => $this->faker->sentence(),
            'start_time' => $this->faker->dateTimeBetween('-1 week', '+1 week'),
            'end_time' => $this->faker->dateTimeBetween('+1 week', '+2 week'),
            'location' => $this->faker->address(),
            'capacity' => $this->faker->numberBetween(1, 100),
        ];
    }
}
