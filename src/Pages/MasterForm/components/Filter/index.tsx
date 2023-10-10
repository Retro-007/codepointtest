import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Close, FilterAltOutlined } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';

import SearchTextField from '../SearchTextField';
import {
    StyledButton, StyledBadge, StyledModalContainer, StyledModalHeader,
    StyledCancelBtn, StyledClearBtn, StyledApplyBtn, StyledFilterChip, StyledMutedText,
} from './FilterStyled';
function Filter() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <StyledButton onClick={handleOpen}>
                <FilterAltOutlined sx={{ fontSize: 30 }} />
                <StyledBadge>2</StyledBadge>
            </StyledButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <StyledModalContainer>
                    <Stack>
                        <StyledModalHeader>
                            <SearchTextField
                                placeholder='Select Filter'
                                style={{
                                    root: {
                                        width: '70%'
                                    },
                                    input: {
                                        fontSize: 12
                                    }
                                }}
                            />
                            <IconButton onClick={handleClose}>
                                <Close sx={{ color: '#000000' }} />
                            </IconButton>
                        </StyledModalHeader>
                        {/* 
                        <StyledModalHeader>
                            <StyledFilterChip style={{ root: { border: '1px solid #417EE3', borderRadius: '21px' } }}>
                                High School <Close />
                            </StyledFilterChip>

                            <Stack direction='row' justifyContent='end' alignItems='center'>
                                <SearchTextField
                                    placeholder='Select Filter'
                                    style={{
                                        root: {
                                            width: '170px',
                                            height: 'fit-content',
                                        },
                                        input: {
                                            fontSize: 12,
                                            padding: '5px',
                                        }
                                    }}
                                />
                                <IconButton onClick={handleClose}>
                                    <Close sx={{ color: '#000000' }} />
                                </IconButton>
                            </Stack>
                        </StyledModalHeader> */}

                        <Box p='10px'>
                            {/* <Stack gap='5px'>
                                <StyledMutedText>Im looking for</StyledMutedText>
                                <Stack direction='row' gap='10px' flexWrap='wrap'>
                                    <StyledFilterChip role='button'>High School</StyledFilterChip>
                                    <StyledFilterChip role='button'>Higher Secondary</StyledFilterChip>
                                    <StyledFilterChip role='button'>Lower Primary</StyledFilterChip>
                                    <StyledFilterChip role='button'>Upper Primary</StyledFilterChip>
                                </Stack>
                            </Stack> */}
                            {/* <Stack gap='5px'>
                                <StyledMutedText>Narrow It Down</StyledMutedText>
                                <Stack gap='5px' pl='10px'>
                                    <StyledFilterChip role='button'>is</StyledFilterChip>
                                    <StyledFilterChip role='button'>is not</StyledFilterChip>
                                    <StyledFilterChip role='button'>is null</StyledFilterChip>
                                    <StyledFilterChip role='button'>Contain (Case Sensitive)</StyledFilterChip>
                                    <StyledFilterChip role='button'>Does not Contain (Case Sensitive)</StyledFilterChip>
                                </Stack>
                            </Stack> */}

                            {/* <Box px='20px'>
                                <StyledTextField placeholder='Type Here...' />
                            </Box> */}

                            <Stack gap='20px'>
                                <Stack gap='5px'>
                                    <StyledMutedText>Selected Filters</StyledMutedText>
                                    <Stack direction='row'>
                                        <StyledFilterChip style={{ root: { border: '1px solid #417EE3', borderRadius: '21px', padding: '4px 10px' } }}>
                                            High School is not *** <Close />
                                        </StyledFilterChip>
                                    </Stack>
                                </Stack>
                                <Stack gap='5px'>
                                    <StyledMutedText>Im looking for</StyledMutedText>
                                    <Stack direction='row' gap='10px' flexWrap='wrap'>
                                        <StyledFilterChip role='button'>High School</StyledFilterChip>
                                        <StyledFilterChip role='button'>Higher Secondary</StyledFilterChip>
                                        <StyledFilterChip role='button'>Lower Primary</StyledFilterChip>
                                        <StyledFilterChip role='button'>Upper Primary</StyledFilterChip>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>

                    </Stack>

                    <Stack p='15px' borderTop='1px solid #DDE2E4' direction='row' justifyContent='space-between'>
                        <StyledCancelBtn>
                            Close
                        </StyledCancelBtn>
                        <Stack direction='row' gap='5px' justifyContent='space-between'>
                            <StyledClearBtn>
                                Clear all
                            </StyledClearBtn>
                            <StyledApplyBtn>
                                Apply
                            </StyledApplyBtn>
                        </Stack>
                    </Stack>
                </StyledModalContainer>
            </Modal>
        </div>
    )
}

export default Filter;