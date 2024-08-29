/* eslint-disable max-len */

'use client';

import React, { useState } from 'react';

import PageHeader from '@/components/PageHeader';
import Wrapper from '@/components/Wrapper';
import Button from '@/components/Button';
import ButtonGroup from '@/components/ButtonGroup';
import Radios from '@/components/Radio';
import SectionHeader from '@/components/SectionHeader';

/**
 * The document structure
 *
 * @returns {JSX.Element} - The page
 */
const StayHospitalCareHomeLegalDetention:React.FC = function StayHospitalCareHomeLegalDetention() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <Wrapper>
                <SectionHeader
                    link="/"
                    title="Pension Age Disability Payment"
                />
            </Wrapper>
            <Wrapper>
                <PageHeader title="We want to know if you have had care needs for 6 months or more" caption="When your care needs started" />
            </Wrapper>
            <Wrapper>
                <p>Care needs are help or support you need during the day or night. Your care needs could have started when you:</p>
                <ul>
                    <li>first needed support</li>
                    <li>began to notice a change</li>
                    <li>had to start changing your habits</li>
                    <li>got a diagnosis</li>
                </ul>
                <p>They could have started before you:</p>
                <ul>
                    <li>got help or support</li>
                    <li>had a diagnosis</li>
                </ul>
                <p>If your care needs started less than 6 months ago, you can still apply. If your application is successful, your award will begin 6 months after your care needs started.</p>
            </Wrapper>
            <Wrapper>
                <form>
                    <Radios
                        name="go-next"
                        id="go-next"
                        label="Have you had care needs for 6 months or more?"
                        items={[
                            {
                                label: 'Yes',
                                value: 'yes',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(true);
                                },
                            },
                            {
                                label: 'No',
                                value: 'no',
                                /**
                                    * @param {Event} event - The event object
                                 */
                                onChange() {
                                    setOpen(false);
                                },
                            },
                        ]}
                    />
                </form>
            </Wrapper>
            <Wrapper>
                <ButtonGroup>
                    <Button
                        variants="secondary"
                        icon="chevron_left"
                        iconSide="left"
                        href="/01-care-needs"
                    >
                        Back
                    </Button>
                    <Button
                        icon="chevron_right"
                        href={open ? '/01-care-needs/check-your-answers' : '/01-care-needs/care-needs-started'}
                    >
                        Save and continue
                    </Button>
                </ButtonGroup>
            </Wrapper>
        </>
    );
};

export default StayHospitalCareHomeLegalDetention;
