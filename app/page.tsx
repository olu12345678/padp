/* eslint-disable max-len */

import type { Metadata } from 'next';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import { TaskListGroup } from '@/components/TaskList';

export const metadata:Metadata = {
    title: 'Apply for Pension Age Disability Payment',
};

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const Page:React.FC = function Page() {
    const pageTitle:string = (
        typeof metadata.title === 'string'
            ? metadata.title
            : 'Social Security Scotland'
    );

    const groups:ScotGov.Component.TaskList[] = [
        {
            label: 'Day and night',
            summary: 'You can complete these in any order.',
            sections: [
                {
                    id: 'care needs',
                    label: 'When your care needs started',
                    summary: 'Tell us about when your care needs started',
                    status: 'not-started',
                    link: '/01-care-needs',
                },
                {
                    id: 'planned-treatment',
                    label: 'Planned medical treatment',
                    summary: 'Tell us about medical treatment or surgery you have planned, or that you\'re on the waiting list for',
                    status: 'not-started',
                    link: '/02-planned-medical-treatment',
                },
                {
                    id: 'conditions-medications',
                    label: 'Conditions, medications and treatments',
                    summary: 'Tell us about any conditions or symptoms you have, and any medications you take',
                    status: 'not-started',
                    link: '/03-conditions-medications',
                },
                {
                    id: 'hospital',
                    label: 'Current stays in a hospital, care home or legal detention',
                    summary: "Tell us whether you're currently in hospital, a care home or legal detention",
                    status: 'not-started',
                    link: '/04-hospital-care-home-legal-detention',
                },
            ],
            ordered: true,
        },
        {
            label: 'Day care',
            summary: 'You can complete these in any order.',
            sections: [
                {
                    id: 'bed',
                    label: 'Getting in and out of bed',
                    summary: 'Questions about your ability to get in or out of bed and help you need to do this',
                    status: 'not-started',
                    link: '/05-getting-in-and-out-of-bed',
                },
                {
                    id: 'washing-bathing',
                    label: 'Washing and bathing',
                    summary: 'Questions about help you need to wash and bathe, and look after your appearance',
                    status: 'not-started',
                    link: '/06-washing-bathing',
                },
                {
                    id: 'toilet-needs',
                    label: 'Toilet needs and managing incontinence',
                    summary: 'Questions about help you need to use the toilet and manage incontinence',
                    status: 'not-started',
                    link: '/07-toilet-needs',
                },
                {
                    id: 'moving-indoors',
                    label: 'Moving around indoors',
                    summary: 'Questions about help you need to stand and walk around indoors',
                    status: 'not-started',
                    link: '/08-mobility-indoors',
                },
                {
                    id: 'dressing',
                    label: 'Dressing and undressing',
                    summary: 'Questions about help you need to get dressed and undressed',
                    status: 'not-started',
                    link: '/09-dressing-undressing',
                },
                {
                    id: 'communicating',
                    label: 'Communicating with others',
                    summary: 'Questions about your ability to hear, understand and communicate and any help you need to do this',
                    status: 'not-started',
                    link: '/10-communicating',
                },
                {
                    id: 'eating-drinking',
                    label: 'Eating and drinking',
                    summary: 'Questions about help you need to eat and drink, and any aids or adaptations you use',
                    status: 'not-started',
                    link: '/11-eating-drinking',
                },
                {
                    id: 'safe-day',
                    label: 'Staying safe during the day',
                    summary: 'Questions about help you need to stay safe during the day',
                    status: 'not-started',
                    link: '/12-safe-day',
                },
                {
                    id: 'activities-interests',
                    label: 'Activities and interests',
                    summary: 'Questions about help you need to do the activities and interests you like to do during the day',
                    status: 'not-started',
                    link: '/13-activities-interests',
                },
                {
                    id: 'support',
                    label: 'Support taking medication, monitoring a condition and with therapy',
                    summary: 'Questions about help you need to take medication, monitor a health condition or do treatments at home',
                    status: 'not-started',
                    link: '/14-taking-medication',
                },
            ],
            ordered: true,
        },
        {
            label: 'Night care',
            summary: 'You can complete these in any order.',
            sections: [
                {
                    id: 'night-time-care',
                    label: 'Night time care needs',
                    summary: 'Questions about the care or support you need to get settled, sleep comfortably, manage toilet needs and incontinence, and with medication, treatment and therapies',
                    status: 'not-started',
                    link: '/15-night-time-needs',
                },
            ],
            ordered: true,
        },
    ];

    return (
        <>
            <Wrapper>
                <PageHeader title={pageTitle} />
            </Wrapper>

            <Wrapper>
                <TaskListGroup
                    heading="Part 2"
                    summary="You should complete the sections in Part 2 by 14 July 2024"
                    ordered
                    groups={groups}
                />
            </Wrapper>
        </>
    );
};

export default Page;
