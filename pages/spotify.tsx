import React from "react";
import type { NextPage } from "next";

import Layouts from "../src/components/Layouts";

const SpotifyPage: NextPage = React.memo((props: any) => {
  return <Layouts />;
});

export default SpotifyPage;
