import { Checkbox, Collapse, Divider, Slider } from 'antd'
import React from 'react'
import { MdOutlineKeyboardArrowUp } from 'react-icons/md'
import EvolutionCard from '../helperComponents/evolutionCard'

const MainFilter = ({className}:{className?:string}) => {
    const {Panel} = Collapse
  return (
      <div className={`filter lg:gap-2 flex w-full md:bg-inherit  bg-white p-6 rounded-xl md:shadow-none shadow ${className}`}>
        <div className="w-full">
          <h4 className="mb-8 text-xl font-semibold">Filters</h4>

          <Collapse
            ghost
            expandIconPosition={"end"}
            defaultActiveKey={["1","2","3","4","5"]}
            className="w-full"
            expandIcon={({ isActive }) => (
              <MdOutlineKeyboardArrowUp
                className={`text-3xl duration-150 ease-out ${
                  !isActive ? "rotate-180" : ""
                }`}
                style={{ fontSize: "25px" }}
              
              />
            )}
          >
            <Panel header={<h5>Price</h5>} key={"1"}>
              <Slider range min={50} max={1200} defaultValue={[50, 1200]} />
              <div className="flex justify-between">
                <span>50$</span>
                <span>1200$</span>
              </div>
            </Panel>
            <Panel header={<h5>Departure Time</h5>} key={"2"}>
              <Slider range defaultValue={[20, 50]} />
              <div className="flex justify-between">
                <span>12:01 AM</span>
                <span>11:56 PM</span>
              </div>
            </Panel>
            <Panel header={<h5>Rating</h5>} key={"3"}>
              <div className="flex gap-4 ">
                <EvolutionCard>
                  0+
                </EvolutionCard>
                <EvolutionCard>
                  1+
                </EvolutionCard>
                <EvolutionCard>
                  2+
                </EvolutionCard>
                <EvolutionCard>
                  3+
                </EvolutionCard>
                <EvolutionCard>
                  4+
                </EvolutionCard>
              </div>
            </Panel>
            <Panel header={<h5>Airlines</h5>} key={"4"}>
              <div className="flex flex-col gap-3">
                <Checkbox>Emirated</Checkbox>
                <Checkbox>Fly Dubai</Checkbox>
                <Checkbox>Qatar</Checkbox>
                <Checkbox>Etihad</Checkbox>
              </div>
            </Panel>
            <Panel header={<h5>Trips</h5>} key={"5"}>
              <div className="flex flex-col gap-3">
                <Checkbox>Round trip</Checkbox>
                <Checkbox>On Way</Checkbox>
                <Checkbox>Multi-City</Checkbox>
                <Checkbox>My Dates Are Flexible</Checkbox>
              </div>
            </Panel>
            <span className='text-sm font-bold text-[#ff8682] py-4 px-3 font-Montserrat'>+24 more</span>
          </Collapse>
        </div>
        <Divider type="vertical" className="md:flex hidden h-full m-0" />
      </div>
  )
}

export default MainFilter
