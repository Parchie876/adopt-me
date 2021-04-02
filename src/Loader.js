import React from 'react';
import { useLoading, ThreeDots } from '@agney/react-loading';

export default function Loader() {
  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots align="center" width="80" />,
  });

  return (
    <section {...containerProps}>
      {indicatorEl}
    </section>
  );
}