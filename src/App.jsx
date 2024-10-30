import { useState } from "react";
import { Stack, Typography, Button, Alert } from "@mui/material";

import CoordinateInput from "./Coordinateinput";
import TransformationSelector from "./TransformationSelector";
import ResultOutput from "./ResultOutput";

function App() {
  const [sourceCoords, setSourceCoords] = useState({ x: "", y: "" });
  const [transformationType, setTransformationType] = useState("lv95towgs84");
  const [result, setResult] = useState({ x: "", y: "" });
  const [error, setError] = useState(null);

  const handleTransform = async () => {
    setError(null);
    const baseURL = "https://geodesy.geo.admin.ch/reframe";
    const endpoint = `${baseURL}/${transformationType}`;
    const url = `${endpoint}?easting=${sourceCoords.x}&northing=${sourceCoords.y}&format=json`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Fehler bei der Transformation");

      const data = await response.json();
      if (data.easting && data.northing) {
        setResult({ x: data.easting, y: data.northing });
      } else if (data.type === "Point" && data.coordinates) {
        setResult({ x: data.coordinates[0], y: data.coordinates[1] });
      } else {
        setError("Unerwartete Antwortstruktur");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Stack spacing={3} alignItems="center" sx={{ mt: 4 }}>
      <Typography variant="h4">Koordinatentransformation</Typography>
      <TransformationSelector
        transformationType={transformationType}
        setTransformationType={setTransformationType}
      />
      <CoordinateInput
        sourceCoords={sourceCoords}
        setSourceCoords={setSourceCoords}
      />
      <Button variant="contained" onClick={handleTransform}>
        Transformieren
      </Button>
      {error && <Alert severity="error">{error}</Alert>}
      <ResultOutput result={result} />
    </Stack>
  );
}

export default App;
