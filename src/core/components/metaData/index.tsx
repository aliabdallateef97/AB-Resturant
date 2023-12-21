import { ReactElement, ReactNode } from "react";

type PropsType={
    loading:boolean,
    LoadingSkeleton:ReactElement | ReactElement[],
    children:ReactNode
}

const MetaData = ({loading,LoadingSkeleton,children}:PropsType) => {
  return <>{loading ? <>{LoadingSkeleton}</>: children}</>;
};

export default MetaData;
