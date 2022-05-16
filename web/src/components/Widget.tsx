import { ChatCircleDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {

    return (

        <Popover className='absolute bottom-3 right-3 md:bottom-5 md:right-5 text-white flex flex-col items-end'>

            <Popover.Panel>
                <WidgetForm/>
            </Popover.Panel>

            <Popover.Button className='bg-blue-600 rounded-full px-3 h-12 flex items-center group focus:outline-none border-2 border-transparent focus:border-blue-300'>
                <ChatCircleDots weight='thin' className='w-6 h-6'/>

                <span className='max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-1000 ease-linear'>
                    <span className='pl-1'></span>
                    Feedback
                </span>
            </Popover.Button>

        </Popover>
    )

}