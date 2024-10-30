import { Select, MenuItem, Typography, Stack } from "@mui/material";
import PropTypes from "prop-types";

function TransformationSelector({ transformationType, setTransformationType }) {
  return (
    <Stack spacing={1}>
      <Typography>Transformationstyp</Typography>
      <Select
        value={transformationType}
        onChange={(e) => setTransformationType(e.target.value)}
      >
        <MenuItem value="wgs84tolv95">WGS84 zu LV95</MenuItem>
        <MenuItem value="lv95towgs84">LV95 zu WGS84</MenuItem>
      </Select>
    </Stack>
  );
}

TransformationSelector.propTypes = {
  transformationType: PropTypes.string.isRequired,
  setTransformationType: PropTypes.func.isRequired,
};

export default TransformationSelector;
