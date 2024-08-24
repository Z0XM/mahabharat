'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

export function ContentBox(props: { level: number; index: number; title: React.ReactNode; content: React.ReactNode }) {
	const [isOpen, setIsOpen] = React.useState(false);
	const code = `${props.level}-${props.index}`;
	return (
		<Collapsible open={isOpen} onOpenChange={setIsOpen} className='max-w-screen w-fit'>
			<CollapsibleTrigger asChild>
				<div className='cursor-pointer font-semibold underline italic'>
					{props.title} <sup>[{code}]</sup>
				</div>
			</CollapsibleTrigger>
			<CollapsibleContent>
				<div className='border-white border-[1px] rounded-md p-2'>
					<sup>[{code}] </sup>
					{props.content}
				</div>
			</CollapsibleContent>
		</Collapsible>
	);
}
