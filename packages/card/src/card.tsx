import type { CardProps as MuiCardProps } from '@mui/material/Card';

import MuiCard from '@mui/material/Card';
import MuiCardActions from '@mui/material/CardActions';
import MuiCardContent from '@mui/material/CardContent';
import MuiCardMedia from '@mui/material/CardMedia';
import MuiSkeleton from '@mui/material/Skeleton';
import React from 'react';
import { Typography } from '@blueshift-ui/typography';

function _CardSkeleton() {
  return (
    <MuiCard className="card-skeleton">
      <MuiSkeleton variant="rectangular" />
      <MuiCardContent>
        <MuiSkeleton variant="rectangular" />
        <MuiSkeleton variant="rectangular" />
        <MuiCardActions>
          <div>
            <MuiSkeleton variant="rectangular" />
          </div>
          <div>
            <MuiSkeleton variant="rectangular" />
          </div>
        </MuiCardActions>
      </MuiCardContent>
    </MuiCard>
  );
}

interface CardProps extends Omit<MuiCardProps, 'title'> {
  action?: React.ReactNode;
  actionDetails?: React.ReactNode;
  loading?: boolean;
  overline?: React.ReactNode;
  thumbnail?: string;
  title?: React.ReactNode;
}

function Card({
  action,
  actionDetails,
  loading = false,
  overline,
  thumbnail,
  title,
  ...CardProps
}: CardProps) {
  if (loading) {
    return <_CardSkeleton />;
  }

  return (
    <MuiCard {...CardProps}>
      {thumbnail && <MuiCardMedia image={thumbnail} />}
      <MuiCardContent>
        {overline && <Typography variant="overline">{overline}</Typography>}
        <Typography component="p" variant="caption">
          {title}
        </Typography>
      </MuiCardContent>
      {(action || actionDetails) && (
        <MuiCardActions>
          {actionDetails && (
            <div>
              <Typography variant="body2">{actionDetails}</Typography>
            </div>
          )}
          {action && <div>{action}</div>}
        </MuiCardActions>
      )}
    </MuiCard>
  );
}

export default Card;
