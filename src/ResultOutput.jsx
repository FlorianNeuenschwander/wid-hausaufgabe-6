import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";

function ResultOutput({ result }) {
  return (
    <Box
      sx={{
        mt: 3,
        p: 2,
        border: "1px solid #ddd",
        borderRadius: 2,
        width: "100%",
        maxWidth: 400,
      }}
    >
      <Typography variant="h6" align="center" gutterBottom>
        Ergebnis der Transformation
      </Typography>
      <Box display="flex" justifyContent="space-between" sx={{ mb: 1 }}>
        <Typography variant="body1">Transformed X:</Typography>
        <Typography variant="body1">{result.x || "Keine Daten"}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="body1">Transformed Y:</Typography>
        <Typography variant="body1">{result.y || "Keine Daten"}</Typography>
      </Box>
    </Box>
  );
}

ResultOutput.propTypes = {
  result: PropTypes.shape({
    x: PropTypes.string,
    y: PropTypes.string,
  }).isRequired,
};

export default ResultOutput;
