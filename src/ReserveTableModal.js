import React, {useState} from "react";
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
    Select,
    Text
  } from '@chakra-ui/react';
import { ACTIONS } from "./constants";


function ReserveTable({availableTimes, dispatch}) {
    const { isOpen, onOpen, onClose } = useDisclosure();


    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("");
    
    const handleBooking = () => {
      console.log(time);
      dispatch({ type: ACTIONS.BOOKING_TIME, time });
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
                <FormLabel for="res-date">Choose date</FormLabel>
                <Input type="date" id="res-date" value={date} onChange={e => setDate(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel for="res-time">Choose time</FormLabel>
                <Select id="res-time" value={time} onChange={e => setTime(e.target.value)}>
                  {availableTimes.map(time => <option>{time}</option>)}
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel for="guests">Number of guests</FormLabel>
                <Input type="number" id="guests" placeholder="1" min="1" max="10" value={guests} onChange={e => setGuests(e.target.value)} />
              </FormControl>
              <FormControl mt={4}>
                <FormLabel for="occasion">Occasion</FormLabel>
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
