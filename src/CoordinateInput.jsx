import { TextField, Stack } from "@mui/material";
import PropTypes from "prop-types";

function CoordinateInput({ sourceCoords, setSourceCoords }) {
  return (
    <Stack direction="row" spacing={2}>
      <TextField
        label="Rechtswert (Easting)"
        value={sourceCoords.x}
        onChange={(e) =>
          setSourceCoords({ ...sourceCoords, x: e.target.value })
        }
      />
      <TextField
        label="Hochwert (Northing)"
        value={sourceCoords.y}
        onChange={(e) =>
          setSourceCoords({ ...sourceCoords, y: e.target.value })
        }
      />
    </Stack>
  );
}

CoordinateInput.propTypes = {
  sourceCoords: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
  setSourceCoords: PropTypes.func.isRequired,
};

export default CoordinateInput;
