import React, {useState, useEffect } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
    FormLabel,
    Input,
    useDisclosure,
    Select
  } from '@chakra-ui/react';
import { ACTIONS } from "./constants";


function ReserveTable({availableTimes, dispatch}) {
    const { isOpen, onOpen, onClose } = useDisclosure();


    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");

    useEffect(() => {
      let timeSlots = fetchAPI(new Date(date));
      const action = {type: ACTIONS.SET_TIME_SLOT, availableTimes: timeSlots}
      dispatch(action)
    }, [date])
  

    const handleBooking = () => {
      const action = { type: ACTIONS.BOOKING_TIME, time: time }
      submitAPI();
      dispatch(action);
    }

    return (
      <>
        <Button onClick={onOpen}>Reserve a table</Button>

        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader color="#F4CE14" fontSize="30">Booking a table</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel htmlFor="res-date">Choose date</FormLabel>
                <Input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select id="res-time" data-testid="res-time" value={time} onChange={e => setTime(e.target.value)}>
                  {availableTimes.map(time => <option key={time}>{time}</option>)}
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" bg='#F4CE14' color="black" mr={3} onClick={handleBooking}>
                Make Your Reservation
              </Button>
              <Button onClick={onClose} color="black">Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
};

export default ReserveTable;
