import ServiceSlider from "../../components/ServiceSlider";

// framer
import { motion } from "framer-motion";

// variant
import { fadeIn } from "../../variants";

// icons
import { BsArrowRight } from "react-icons/bs";

// useState
import { useState } from "react";

// chakraUi components
import {
  Container,
  FormControl,
  Text,
  FormErrorMessage,
  Input,
  Textarea,
  Button,
  useToast,
} from "@chakra-ui/react";
import { sendContactForm } from "../../lib/api";
const initValue = { name: "", email: "", subject: "", message: "" };

const initState = { values: initValue };

const Contact = () => {
  const toast = useToast();
  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const { values, isLoading, error } = state;

  const onBlur = ({ target }) =>
    setTouched((prev) => ({ ...prev, [target.name]: true }));
  // handle change
  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value,
      },
    }));

  const onSubmit = async (e) => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <>
      <div className="h-full bg-primary/30">
        <div className="container mx-auto py-32 text-center xl:text-left flex items-center  justify-center h-full">
          <div className="flex flex-col w-full max-w-[700px]   ">
            {/* text */}
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 text-center mb-12"
            >
              Let&lsquo;s <span className="text-emerald-400">Connect</span>
            </motion.h2>
            {/* form */}
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              action=""
              method="POST"
              noValidate
              className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
              <Container>
                <div className="flex gap-x-6 w-full">
                  <div className="flex flex-col w-[300px] xl:w-[500px] gap-y-3">
                    <FormControl
                      isRequired
                      isInvalid={touched.name && !values.name}
                      mb={6}
                    >
                      <Input
                        type="text"
                        name="name"
                        onChange={handleChange}
                        value={values.name}
                        placeholder="name"
                        onBlur={onBlur}
                        errorBorderColor="red.300"
                        focusBorderColor="#34d399"
                        className="input"
                      />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                  </div>
                  <div className="flex flex-col w-[400px] xl:w-[900px] gap-y-3">
                    <FormControl
                      isRequired
                      isInvalid={touched.email && !values.email}
                      mb={6}
                    >
                      <Input
                        type="email"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        placeholder="email"
                        onBlur={onBlur}
                        focusBorderColor="#34d399"
                        errorBorderColor="red.300"
                        className="input normal-case"
                      />
                      <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                  </div>
                </div>
                <FormControl
                  isRequired
                  isInvalid={touched.subject && !values.subject}
                  mb={6}
                >
                  <Input
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    value={values.subject}
                    placeholder="Subject"
                    onBlur={onBlur}
                    errorBorderColor="red.300"
                    focusBorderColor="#34d399"
                    className="input"
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <FormControl
                  isRequired
                  isInvalid={touched.message && !values.message}
                  mb={6}
                >
                  <Textarea
                    type="text"
                    name="message"
                    onChange={handleChange}
                    value={values.message}
                    placeholder="Message"
                    onBlur={onBlur}
                    focusBorderColor="#34d399"
                    errorBorderColor="red.300"
                    className="textarea normal-case"
                  />
                  <FormErrorMessage>Required</FormErrorMessage>
                </FormControl>
                <Button
                  variant="outline"
                  colorScheme="green"
                  isDisabled={
                    !values.name ||
                    !values.email ||
                    !values.subject ||
                    !values.message
                  }
                  _hover={{ bg: "green.200" }}
                  onClick={onSubmit}
                  isLoading={isLoading}
                >
                  Let&lsquo;s talk
                </Button>
                {error && (
                  <Text color="red.300" my={4} fontSize="xl">
                    {error}
                  </Text>
                )}
              </Container>
            </motion.div>
          </div>
        </div>
      </div>

      {/* slider */}
      <motion.div
        variants={fadeIn("down", 0.6)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="w-full hidden xl:max-w-[65%] mx-auto"
      >
        <ServiceSlider />
      </motion.div>
    </>
  );
};

export default Contact;
