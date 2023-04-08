import React, { useEffect } from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  HStack
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../../hooks/useSubmit";
import {useAlertContext} from "../../context/alertContext";

const buttonStyle = {
    height: "60px",
    width: "200px",
    borderRadius: "32px",
    color: "var(--color-primary)",
    backgroundColor: "var(--color-secondary)",
    fontSize: "16px",
    lineHeight: "19px",
    fontWeight: "700",
    border: "none",
    _hover: {
      cursor: "pointer",
      backgroundColor: "var(--color-primary)",
      color: "var(--color-secondary)"
    }
};

const bookingFormSchema = Yup.object({
  date: Yup.date()
    .min(new Date(), 'Date cannot be in the past')
    .required('Date is required'),
  time: Yup.string()
    .required('Time is required'),
  guests: Yup.number()
    .min(1, 'Number of guests must be at least 1')
    .max(10, 'Number of guests must be at most 10')
    .required('Number of guests is required'),
  occasion: Yup.string(),
  firstName: Yup.string()
    .required('First name is required'),
  lastName: Yup.string()
    .required('Last name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
});


function BookingForm() {
    const {isLoading, response, submit} = useSubmit();
    const { onOpen, onClose } = useAlertContext();
  
    const formik = useFormik({
      initialValues: {
        date: '',
        time: '17:00',
        guests: 1,
        occasion: 'none',
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: (values) => {
        submit('http://www.example.com/api/booking', values);
      },
      validationSchema: bookingFormSchema,
    });
  
    useEffect(() => {
      if (response) {
        onOpen(response.type, response.title, response.message);
        if (response.type === 'success') {
          formik.resetForm();
        }
        const timerId = setTimeout(() => {
          onClose();
          // redirect to home page
          window.location.href = "/";
        }, 5000);
        return () => clearTimeout(timerId);
      }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response]);

    return(
        <VStack w="100%" alignItems="flex-start">
          <Box as="form" p={6} rounded="md" w="100%">
            <VStack spacing={8} color="#495E57">
              <FormControl isInvalid={formik.errors.date && formik.touched.date}>
                <FormLabel htmlFor="date">Choose a date</FormLabel>
                <Input
                  id="date"
                  data-testid="date"
                  name="date"
                  type="date"
                  aria-invalid={formik.errors.date && formik.touched.date ? 'true' : 'false'}
                  {...formik.getFieldProps('date')}
                />
                <FormErrorMessage>
                  {formik.errors.date}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.time && formik.touched.time}>
                <FormLabel htmlFor="time">Choose time</FormLabel>
                  <Select 
                    id="time" 
                    data-testid="time"
                    name="time" 
                    aria-invalid={formik.errors.time && formik.touched.time ? 'true' : 'false'}
                    {...formik.getFieldProps('time')}
                  >
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                      <option value="20:00">20:00</option>
                      <option value="21:00">21:00</option>
                      <option value="22:00">22:00</option>
                  </Select>
                <FormErrorMessage>
                  {formik.errors.time}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input
                  id="guests"
                  data-testid="guests"
                  name="guests"
                  type="number"
                  min="1"
                  max="10"
                  placeholder="1"
                  aria-invalid={formik.errors.guests && formik.touched.guests ? 'true' : 'false'}
                  {...formik.getFieldProps('guests')}
                />
                <FormErrorMessage>
                  {formik.errors.guests}
                </FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>
                <FormLabel htmlFor="occasion">Occasion</FormLabel>
                <Select 
                    id="occasion" 
                    data-testid="occasion"
                    name="occasion" 
                    aria-invalid={formik.errors.occasion && formik.touched.occasion ? 'true' : 'false'}
                    {...formik.getFieldProps('occasion')
                }>
                  <option value="none">Other</option>
                  <option value="birthday">Birthday</option>
                  <option value="engagement">Engagement</option>
                  <option value="anniversary">Anniversary</option>
                </Select>
                <FormErrorMessage>
                  {formik.errors.occasion}
                </FormErrorMessage>
              </FormControl>

              <Box w="full" position="relative">
              <HStack spacing="4" width="full">
                  <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                      <FormLabel htmlFor="firstName">First Name</FormLabel>
                      <Input
                      id="firstName"
                      data-testid="firstName"
                      name="firstName"
                      aria-invalid={formik.errors.firstName && formik.touched.firstName ? 'true' : 'false'}
                      {...formik.getFieldProps('firstName')}
                      />
                      <FormErrorMessage position="absolute" top="100%">
                      {formik.errors.firstName}
                      </FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={formik.errors.lastName && formik.touched.lastName}>
                      <FormLabel htmlFor="lastName">Last Name</FormLabel>
                      <Input
                        id="lastName"
                        data-testid="lastName"
                        name="lastName"
                        aria-invalid={formik.errors.lastName && formik.touched.lastName ? 'true' : 'false'}
                        {...formik.getFieldProps('lastName')}
                      />
                      <FormErrorMessage position="absolute" top="100%">
                      {formik.errors.lastName}
                      </FormErrorMessage>
                  </FormControl>
              </HStack>
              </Box>


              <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <Input
                    id="email"
                    data-testid="email"
                    name="email"
                    type="email"
                    aria-invalid={formik.errors.email && formik.touched.email ? 'true' : 'false'}
                    {...formik.getFieldProps('email')}
                  />
                  <FormErrorMessage>
                  {formik.errors.email}
                  </FormErrorMessage>
              </FormControl>

              <Button 
                  type="submit" 
                  aria-label="Make your reservation"
                  sx={buttonStyle}
                  isLoading={isLoading}
                  isDisabled={!formik.isValid || isLoading}
                  onClick={formik.handleSubmit}                
              >
                Make your reservation
              </Button>
            </VStack>
          </Box>
        </VStack>
    )
}

export default BookingForm;