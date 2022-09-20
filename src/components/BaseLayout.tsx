import Head from "next/head";
import { FunctionComponent, ReactElement } from "react";
import Header from "../header/Header";

interface BaseLayoutProps {
  children: ReactElement;
  pageName: string;
}

const BaseLayout: FunctionComponent<BaseLayoutProps> = (props) => {
  const { pageName, children } = props;
  return (
    <>
      <Head>
        <title>{pageName}</title>
      </Head>
      <Header />
      {children}
    </>
  );
};

export default BaseLayout;
