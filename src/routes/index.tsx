import { Route, Routes } from 'react-router-dom';
import {} from 'react-router';
import { GeneratePage } from '@/pages/generate';
import { InfoCard } from '@/components/info-card';

export function Router() {
  return (
    <Routes>
      <Route path="/generate" element={<GeneratePage />} />
      <Route path="/:name" element={<InfoCard />} />
    </Routes>
  );
}
