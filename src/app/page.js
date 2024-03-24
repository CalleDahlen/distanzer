'use client'

import { DistanceInput } from "./components/DistanceInput";
import { RemainingDistance } from "./components/RemainingDistance";
import { useState } from 'react';
import { SetDistanceGoalInput } from "./components/SetDistanceGoalInput";


export default function Home() {
  const [distanceGoal, setDistanceGoal] = useState();
  const [rideDistance, setRideDistance] = useState();


  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <RemainingDistance />
      <DistanceInput />
      <SetDistanceGoalInput />
    </main>
  );
}
