// material-ui
import { Typography } from '@mui/material';

// project imports
import MainCard from 'ui-component/cards/MainCard';

// ==============================|| SAMPLE PAGE ||============================== //

const mapView = () => {
    return (
      <MainCard title="Sample Card">
          <Typography variant="body2">
              임시로 공간만 만들어 두기
          </Typography>
      </MainCard>
    )
}

export default mapView;