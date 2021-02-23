import React, {ReactElement, useCallback, useState} from 'react'
import { TabTitleArea, TabTitleButton } from './Tabs.style'

type Props = {
  title: string,
}

export const Tab: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

type PropsBody = {
  children: ReactElement[]
}

export const Tabs: React.FC<PropsBody> = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  return (
    <div>
      <TabTitleArea>{children.map((item, index) => (<TabTitle key={index} title={item.props.title} index={index} setSelectedTab={setSelectedTab}/>))}</TabTitleArea>
      {children[selectedTab]}
    </div>
  )
}

type PropsTitle = {
  title: string
  index: number
  setSelectedTab: (index: number) => void
}

export const TabTitle: React.FC<PropsTitle> = ({ title, setSelectedTab, index }) => {

  const onClick = useCallback(() => {
    setSelectedTab(index)
  }, [setSelectedTab, index])

  return (
    <TabTitleButton onClick={onClick}>{title}</TabTitleButton>
  )
}