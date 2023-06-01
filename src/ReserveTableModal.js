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
    Select,
    Text
  } from '@chakra-ui/react';
import { ACTIONS } from "./constants";
import { useNavigate } from "react-router-dom";

function ReserveTable({availableTimes, dispatch, setBookingDetails}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [date, setDate] = useState({value: "", error: null});
    const [time, setTime] = useState("");
    const [guests, setGuests] = useState({value: "", error: null});
    const [occasion, setOccasion] = useState("");
    const navigate = useNavigate();



    useEffect(() => {
      let timeSlots = fetchAPI(new Date(date.value));
      const action = {type: ACTIONS.SET_TIME_SLOT, availableTimes: timeSlots}
      dispatch(action)
    }, [date.value]);

    const guestValidation = (e) => {
      if (!guests.value) {
        setGuests((current) => ({...current, error: "Please enter number of guests"}))
        return
      };
      if (parseInt(guests.value) < 1) {
        setGuests((current) => ({...current, error: "Please reserve for at least 1 guest"}))
      }
    }
  
    const dateValidation = (e) => {
      const todayDate = new Date();
      if (!date.value) {
        setDate((current) => ({...current, error: "Please choose a date"}))
        return 
      }
      const selectedDate = new Date(date.value);
      if (selectedDate < todayDate) {
        setDate((current) => ({...current, error: "Please choose a future time"}));
      }
    };

    const handleBooking = () => {
      const action = { type: ACTIONS.BOOKING_TIME, time: time }
      submitAPI();
      dispatch(action);
      setBookingDetails({date: date.value, time: time, guests: guests.value, occasion: occasion});
      onClose();
      navigate("/confirm-booking")
    };

    const blockOrAllow = () => {
      if (date.value && !date.error && guests.value && !guests.error && time) {
        return false
      } else {
        return true
      }
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
                <Input type="date" id="res-date" value={date.value} onChange={e => setDate({value: e.target.value})} onBlur={dateValidation} />
                <Text color="red">{date.error}</Text>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="res-time">Choose time</FormLabel>
                <Select id="res-time" data-testid="res-time" value={time} onChange={e => setTime(e.target.value)}>
                  <option value="">Please choose a time</option>
                  {availableTimes.map(time => <option key={time} value={time}>{time}</option>)}
                </Select>
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input type="number" id="guests" placeholder="Enter number of guests" min="1" max="10" value={guests.value} onChange={e => setGuests({value: e.target.value})} onBlur={guestValidation} />
                {guests.error ? <Text color="red">{guests.error}</Text> : null}
              </FormControl>
              <FormControl mt={4}>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                <option>Please choose an occasion</option>
                  <option>Birthday</option>
                  <option>Anniversary</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button type="submit" bg='#F4CE14' color="black" mr={3} onClick={handleBooking} isDisabled={blockOrAllow()}>
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
