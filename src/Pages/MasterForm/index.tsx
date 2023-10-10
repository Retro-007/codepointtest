/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import {
    Box, Collapse, IconButton, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography,
    Checkbox as MuiCheckbox, FormControl, Select, MenuItem, TextField,
} from "@mui/material";
import {
    AddBox, Category, TripOrigin, DragIndicator, EditNote, ArrowBackIosNew, ArrowForwardIos, KeyboardArrowUp,
    KeyboardArrowDown
} from "@mui/icons-material";


import {
    StyledContainer, StyledFormButton, StyledLetterAvatar, StyledFormItemBtn, StyledAddBtn,
    StyledPrimaryButton, StyledSecondaryButton
} from "./style/MasterFormStyled";

import SearchTextField from './components/SearchTextField';
// import ButtonDropdown from './components/ButtonDropdown';
import InputTextField from './components/InputTextField';
import DeleteModal from './components/DeleteModal';
import Filter from './components/Filter';

import welcomeFormImage from '../../assets/images/welcome-image.svg'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, goToPage, nextPage, prevPage, PerPageChange, sortFields } from '../../redux/reduxActions/actions';
import { Data, FinalData, TableProps } from '../../types/interfaces';
import { UserState } from '../../redux/reducers/reducer';

const listItems = ['Religion', 'Nationality', 'Section', 'Profession', 'Designation',
    'Class Master', 'Wing'];

const formValue = [
    {
        name: 'General Forms',
        category: 'General',
        iconColor: '#D17777',
        listItems: listItems,
    },
    // {
    //     name: 'Regristration Management',
    //     category: 'Administration',
    //     listItems: listItems,
    //     iconColor: '#D0BD78',
    // },
    // {
    //     name: 'Premotion Management',
    //     category: 'Administration',
    //     listItems: listItems,
    //     iconColor: '#74CFBF'
    // },
    // {
    //     name: 'Front Office Management',
    //     category: 'Administration',
    //     listItems: listItems,
    //     iconColor: '#77A1D1',
    // },
    // {
    //     name: 'Clinic',
    //     category: 'Administration',
    //     listItems: listItems,
    //     iconColor: '#CF74AB',
    // },
    // {
    //     name: 'BagdeMaker',
    //     category: 'Administration',
    //     listItems: listItems,
    //     iconColor: '#CF74AB',
    // },
    // {
    //     name: 'Counsellors',
    //     category: 'Administration',
    //     listItems: listItems,
    //     iconColor: '#CF74AB',
    // },
]

// const tableValue = [
//     {
//         id: 1,
//         name: 'Hindu',
//         status: 'active',
//     },
//     {
//         id: 2,
//         name: 'Christian',
//         status: 'active',
//     },
//     {
//         id: 3,
//         name: 'Muslim',
//         status: 'inactive',
//     },
//     {
//         id: 4,
//         name: 'Sikhism',
//         status: null,
//     },
//     {
//         id: 5,
//         name: 'Buddist',
//         status: null,
//     },
//     {
//         id: 6,
//         name: 'Jainism',
//         status: null,
//     },
//     {
//         id: 7,
//         name: 'Jews',
//         status: null,
//     },
//     {
//         id: 8,
//         name: 'Chinese Tradional',
//         status: null,
//     },
//     {
//         id: 9,
//         name: 'Non-Religious',
//         status: null,
//     },
// ]
const scrollBarStyle = {
    scrollbarColor: '#D3D3D3 #EBEBEB',
    scrollbarWidth: 'thin',
    '::-webkit-scrollbar': {
        width: '4px',
    },
    '::-webkit-scrollbar-track': {
        backgroundColor: '#EBEBEB',
    },
    '::-webkit-scrollbar-thumb': {
        backgroundColor: '#D3D3D3',
        borderRadius: '4px',
    },
}


export default function MasterForm() {

    const dispatch = useDispatch();

    const [showFormContainer, setShowFormContainer] = React.useState(true);
    const [showAddForm, setShowAddForm] = React.useState(false);
    const [isChecked, setIsChecked] = React.useState(false);
    const [selectedForm, setSelectedForm] = React.useState<number | null>(0);
    const [tableData, setTableData] = React.useState<Data[] | null>(null);
    const [selectedItemIndex, setSelectedItemIndex] = React.useState<number | null>(0);

    const userState = useSelector((state: UserState) => state.user);

    const { users: UserData, page, limit, orderBy, sortedBy } = userState;


    React.useEffect(() => {
        handleFetchTableData()
    }, [])



    React.useEffect(() => {
        if (UserData?.data) {

            const formattedData = UserData.data.map((user: Data) => {
                return {
                    id: user.id,
                    name: user.first_name,
                    email: user.email_id,
                };
            });

            setTableData(formattedData)
        }

    }, [UserData])


    const handleFetchTableData = async () => {


        await dispatch(getUsers(page, limit, orderBy, sortedBy));
    }

    const handleCheckboxStatus = () => {
        setIsChecked((prev) => !prev);
    }

    const handleAddFormDisplay = () => {
        setShowAddForm((prev) => !prev);
    }

    const handleChange = (index: number) => {
        if (index === selectedForm) {
            setSelectedForm(null);
            return
        }
        setSelectedForm(index)
        // setChecked((prev) => !prev);
    };

    const handleButtonClick = (index: number) => {
        setSelectedItemIndex(index);
        // window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return (
        <Stack direction='row' p='14px' gap={1} height='calc(100vh - 110px)'>

            {/* left section  */}
            <Box width='40%' sx={{ overflowY: 'scroll', ...scrollBarStyle }}>
                <StyledContainer>
                    <Box p='10px' borderBottom='1px solid #E5E9EB'>
                        <Typography component={'h2'} sx={{ fontSize: 16, fontWeight: 700, color: '#000000' }}>
                            Select Form
                        </Typography>
                    </Box>
                    <Box p='15px 10px' m='10px' mb='20px' border='1px solid #E7EAF3'>
                        <Box>
                            <SearchTextField placeholder='Search' />
                        </Box>
                    </Box>
                    <Stack pb={5} sx={{ borderTop: '1px solid #DDE2E4' }}>
                        {formValue.map((data, index) => (
                            <div key={index}>
                                <StyledFormButton onClick={() => handleChange(index)}>
                                    <StyledLetterAvatar bgcolor={data.iconColor}>R</StyledLetterAvatar>
                                    <Stack>
                                        <Typography sx={{ fontSize: 15, color: '#252525', fontWeight: 700, textAlign: 'start' }}>
                                            {data.name}
                                        </Typography>
                                        <Stack direction='row' gap='5px' alignItems='end'>
                                            <Category sx={{ color: '#A2A2A2', fontSize: 16 }} />
                                            <Typography sx={{ fontSize: 12, color: '#A2A2A2', fontWeight: 500, lineHeight: 1 }}>
                                                {data.category}
                                            </Typography>
                                        </Stack>
                                    </Stack>
                                </StyledFormButton>

                                <Collapse in={selectedForm === index ? true : false}>
                                    {data.listItems.map((item, index) => (
                                        <StyledFormItemBtn
                                            key={index}
                                            selected={index === selectedItemIndex ? true : null}
                                            onClick={() => {
                                                handleButtonClick(index)
                                                setShowFormContainer(true)
                                            }}
                                        >
                                            <TripOrigin sx={{ fontSize: 10, color: '#252525' }} />
                                            <Typography sx={{ fontSize: 13, color: '#252525', fontWeight: 600, lineHeight: 1 }}>
                                                {item}
                                            </Typography>
                                        </StyledFormItemBtn>
                                    ))}
                                </Collapse>
                            </div>
                        ))}
                    </Stack>
                </StyledContainer>
            </Box>

            {/* right section  */}
            {showFormContainer ? (
                <Box width='60%' sx={{ overflowY: 'scroll', ...scrollBarStyle }}>
                    <StyledContainer>
                        {!showAddForm ? (
                            <Box>
                                {!isChecked ? (
                                    <Stack
                                        direction='row' p='15px' justifyContent='space-between' alignItems='center' flexWrap='wrap' rowGap='5px'
                                        sx={{ minHeight: '73px', boxSizing: 'border-box' }}
                                    >
                                        <Stack direction='row' width={{ xs: '180px', sm: '50%', md: '40%' }} alignItems='center' gap='8px'>
                                            <Box minWidth='180px'>
                                                <SearchTextField placeholder='Search' />
                                            </Box>
                                            <Filter />
                                        </Stack>

                                        <StyledAddBtn
                                            onClick={() => handleAddFormDisplay()}
                                        >
                                            <AddBox />
                                            <Typography>Add Religion</Typography>
                                        </StyledAddBtn>
                                    </Stack>
                                ) : (
                                    <Stack
                                        direction='row' p='15px' justifyContent='end' alignItems='center' gap='15px' flexWrap='wrap' rowGap='5px'
                                        sx={{ minHeight: '73px', boxSizing: 'border-box', }}
                                    >
                                        <StyledSecondaryButton>Change Status</StyledSecondaryButton>
                                        <StyledPrimaryButton>Delete All</StyledPrimaryButton>
                                    </Stack>
                                )}
                                <Box p={1}>
                                    <DragableTable
                                        checked={isChecked}
                                        handleCheckbox={handleCheckboxStatus}
                                        data={tableData}
                                        UserData={UserData}
                                        page={page}
                                        limit={limit}
                                        orderBy={orderBy}
                                        sortedBy={sortedBy}
                                    />
                                </Box>
                            </Box>
                        ) : (
                            <Stack p={'15px'} gap='20px'>
                                <Stack direction='row' justifyContent='space-between' alignItems='center'>
                                    <Typography sx={{ fontSize: 17, fontWeight: 700, color: '#252525' }}>
                                        Add Details
                                    </Typography>
                                </Stack>
                                <Stack gap='20px'>
                                    <Stack direction='row' gap='10px' flexWrap='wrap'>
                                        <Box flex={1}>
                                            <InputTextField
                                                label='Name'
                                                placeholder='Enter Name'
                                                style={{
                                                    root: {
                                                        width: '50%',
                                                    },
                                                }}
                                            />
                                        </Box>
                                        <Box flex={1}>
                                            <InputTextField
                                                label='Module'
                                                placeholder='Enter Module'
                                                style={{
                                                    root: {
                                                        width: '50%',
                                                    },
                                                }}
                                            />
                                        </Box>
                                    </Stack>
                                    <Stack direction='row' gap='10px' justifyContent='end'>
                                        <StyledSecondaryButton
                                            root={{
                                                padding: '3px 12px',
                                            }}
                                            onClick={() => handleAddFormDisplay()}
                                        >
                                            Cancel
                                        </StyledSecondaryButton>
                                        <StyledPrimaryButton
                                            root={{
                                                padding: '3px 12px',
                                            }}
                                            onClick={() => handleAddFormDisplay()}
                                        >
                                            Save
                                        </StyledPrimaryButton>
                                    </Stack>
                                </Stack>
                            </Stack>
                        )}
                    </StyledContainer>
                </Box>
            ) : (
                <Stack width='60%' alignItems='center' pt='50px' px='50px' gap='10px' boxSizing='border-box'>
                    <Box width='250px'>
                        <img width='100%' height='100%' src={welcomeFormImage} alt='welcome form' />
                    </Box>
                    <Typography sx={{ color: '#A2A2A2', fontSize: 19, fontWeight: 500, textAlign: 'center' }}>
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing elit, sed do eiusmod tempo
                    </Typography>
                </Stack>
            )}
        </Stack>
    )
}

// const dropDowndata = [
//     {
//         name: 'Active',
//         value: 'active',
//     },
//     {
//         name: 'Inactive',
//         value: 'inactive',
//     }
// ];

function DragableTable({ checked, handleCheckbox, data, page, limit, orderBy, sortedBy, UserData, }: TableProps) {

    const dispatch = useDispatch();

    const [form, setForm] = React.useState<FinalData[] | null>(null);

    React.useEffect(() => setForm(data), [data])


    const draggingItem = React.useRef();
    const dragOverItem = React.useRef();


    // const handleStatusChange = (value, index) => {
    //     let updatedForm = [...form];
    //     updatedForm[index].status = value;
    //     setForm(updatedForm);
    // };

    const handleDragStart = (e, position) => {
        draggingItem.current = position;
        // console.log(e.target.innerHTML);
    };
    const handleDragEnter = (e, position) => {
        // console.log('Entering handleDragEnter');
        // console.log('draggingItem.current:', draggingItem.current);
        // console.log('dragOverItem.current:', dragOverItem.current);

        dragOverItem.current = position;

        // const listCopy = [...form];
        // const draggingItemContent = listCopy[draggingItem.current];
        // listCopy.splice(draggingItem.current, 1);
        // listCopy.splice(dragOverItem.current, 0, draggingItemContent);

        // dragOverItem.current = null; // Reset dragOverItem reference

        // draggingItem.current = dragOverItem.current; // Update draggingItem reference
        // setForm(listCopy);

        // console.log('Exiting handleDragEnter');
    };

    const handleDragEnd = (e) => {
        const listCopy = [...form];
        const draggingItemContent = listCopy[draggingItem.current];
        listCopy.splice(draggingItem.current, 1);
        listCopy.splice(dragOverItem.current, 0, draggingItemContent);

        draggingItem.current = null;
        dragOverItem.current = null;
        setForm(listCopy);
    };

    // const [perPageValue, setPerPageValue] = React.useState(10);

    const handlePerPageChange = (event: string | number) => {
        console.log(event);

        dispatch(PerPageChange(1, event, orderBy, sortedBy))
        // setPerPageValue(event.target.value);
    };

    const handlePagination = (type: string) => {
        if (type === "next") {
            dispatch(nextPage(UserData?.next_page_url))
        }
        else if (type === "prev") {
            dispatch(prevPage(UserData?.prev_page_url))
        }
    }

    const handleInputPageChagne = (event: number) => {
        if (event > UserData?.last_page || event < 1) {
            return
        }
        else {
            dispatch(goToPage(event, limit, orderBy, sortedBy))
        }
    }

    const handleClickSort = (type: string) => {
        switch (type) {
            case 'id':
                dispatch(sortFields(1, limit, type, sortedBy === "asc" ? "desc" : "asc"))
                break;
            case 'first_name':
                dispatch(sortFields(1, limit, type, sortedBy === "asc" ? "desc" : "asc"))
                break;
            case 'email':
                dispatch(sortFields(1, limit, type, sortedBy === "asc" ? "desc" : "asc"))
                break;

            default:
                break;
        }
    }

    return (
        <>
            <Table sx={{ border: '1px solid #DDE2E4', borderRadius: '8px' }}>
                <TableHead>
                    <TableRow sx={{
                        backgroundColor: '#F7F9FF',
                        'th': {
                            fontSize: 13, color: '#5F5F5F', fontWeight: 500, padding: '10px 0px', textAlign: 'center',
                        }
                    }}>
                        <TableCell></TableCell>
                        <TableCell>
                            <Stack direction='row' alignItems='center' gap='5px' sx={{ display: 'inline-flex' }}>

                                <Typography sx={{ fontSize: 13, color: '#5F5F5F', fontWeight: 500, }}>ID</Typography>
                                <Box onClick={() => handleClickSort('id')} role='button' sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <KeyboardArrowUp />
                                    <KeyboardArrowDown sx={{ mt: '-8px' }} />
                                </Box>
                            </Stack>

                        </TableCell>
                        <TableCell onClick={() => handleClickSort('first_name')}>
                            <Stack direction='row' alignItems='center' gap='5px' sx={{ display: 'inline-flex' }}>
                                <Typography sx={{ fontSize: 13, color: '#5F5F5F', fontWeight: 500, }}>Name</Typography>
                                <Box role='button' sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <KeyboardArrowUp />
                                    <KeyboardArrowDown sx={{ mt: '-8px' }} />
                                </Box>
                            </Stack>

                        </TableCell>
                        <TableCell onClick={() => handleClickSort('email')}>
                            <Stack direction='row' alignItems='center' gap='5px' sx={{ display: 'inline-flex' }}>
                                <Typography sx={{ fontSize: 13, color: '#5F5F5F', fontWeight: 500, }}>Email</Typography>
                                <Box role='button' sx={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                                    <KeyboardArrowUp />
                                    <KeyboardArrowDown sx={{ mt: '-8px' }} />
                                </Box>
                            </Stack>
                        </TableCell>
                        <TableCell align='center'>Action</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {form?.length === 0 || form === null ? (
                        <TableRow>
                            <TableCell colSpan={5} sx={{
                                width: '100%', padding: '100px 0', textAlign: 'center',
                                fontSize: 15, fontWeight: 400, color: '#A2A2A2'
                            }}>
                                No data available
                            </TableCell>
                        </TableRow>
                    ) : (
                        form?.map((item, index) => (
                            <TableRow
                                draggable
                                onDragStart={(e) => handleDragStart(e, index)}
                                onDragEnter={(e) => handleDragEnter(e, index)}
                                onDragOver={(e) => e.preventDefault()}
                                onDragEnd={handleDragEnd}
                                key={item.id}
                                sx={{
                                    'td': { fontSize: 14, padding: '10px 0px', color: '#0E0E0E', fontWeight: 500, textAlign: 'center', }
                                }}>
                                <TableCell sx={{ width: '30px' }}>
                                    <DragIndicator sx={{ fontSize: 27, color: '#DDE2E4', cursor: 'grab' }} />
                                </TableCell>
                                <TableCell sx={{ width: '80px' }}>{item.id}</TableCell>
                                <TableCell>{item.name}</TableCell>
                                <TableCell>{item.email}</TableCell>

                                <TableCell align='center' sx={{ width: '80px', 'button': { color: '#252525', 'svg': { fontSize: 20 } } }}>
                                    <Stack direction='row' alignItems='center'>
                                        <IconButton>
                                            <EditNote />
                                        </IconButton>
                                        <DeleteModal />
                                        <IconButton>
                                            {/* <DeleteOutline /> */}
                                        </IconButton>
                                    </Stack>
                                </TableCell>
                            </TableRow>

                        ))
                    )}
                </TableBody>
            </Table>

            {/* pagination  */}
            <Stack direction='row' justifyContent='space-between' py='6px' pt='15px' alignItems='center'>
                <Stack direction='row' gap='5px' alignItems='center'>
                    <FormControl sx={{ '.MuiSelect-select ': { padding: '5px' } }}>
                        <Select
                            value={limit}
                            onChange={(e) => handlePerPageChange(e.target.value)}
                        >
                            <MenuItem value={10}>10</MenuItem>
                            <MenuItem value={20}>20</MenuItem>
                            <MenuItem value={50}>50</MenuItem>
                            <MenuItem value={100}>100</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography sx={{ color: '#84919A', fontSize: 13, fontWeight: 400 }}>Pages</Typography>
                </Stack>
                <Stack direction='row' alignItems='center' gap='3px'>
                    <IconButton disabled={1 === page} onClick={() => handlePagination('prev')} sx={{ p: '3px' }}>
                        <ArrowBackIosNew />
                    </IconButton>
                    <Stack direction='row' alignItems='center' gap='8px'>
                        <Typography sx={{ color: '#84919A', fontSize: 13, fontWeight: 400 }}>Page {page} of {UserData?.last_page}</Typography>
                        <Stack direction='row' alignItems='center' gap='3px'>
                            <Typography sx={{ color: '#344054', fontSize: 13, fontWeight: 500 }}>Go to page</Typography>
                            <TextField InputProps={{ defaultValue: 1 }} sx={{ minWidht: 0, 'input': { p: '5px', width: '50px' } }} onChange={(event) => handleInputPageChagne(event?.target.value)} type='number' />
                        </Stack>
                    </Stack>
                    <IconButton disabled={UserData?.last_page === page} onClick={() => handlePagination('next')} sx={{ p: '3px' }}>
                        <ArrowForwardIos />
                    </IconButton>
                </Stack>
            </Stack>
        </>


    )
}