import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { SpinnerContext } from "./EbookSpinnerContext";

const sources = ["LinkedIn", "Twitter", "Meta"];
const EbookForm = ({ emailIdToSendMail, sourceName }) => {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const { setSpinner, spinner } = useContext(SpinnerContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "all",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      source: "LinkedIn",
    },
  });

  //   handle form submit click
  const onSubmit = async (values) => {
    try {
      setSpinner(true);

      const googleFormURL =
        "https://script.google.com/macros/s/AKfycbxB01P65tI2n7WAJpd_4aHJyJV5OBKCnNl8fAmDGKebrs9F51WTPBe9B3g_I2VYvFI/exec";

      // Construct URLSearchParams instead of FormData
      const googleFormData = new URLSearchParams();
      googleFormData.append("Name", values.name);
      googleFormData.append("Email", values.email);
      googleFormData.append("MobileNumber", values.phone);

      // Send POST request with the correct headers
      const res = await fetch(googleFormURL, {
        method: "POST",
        body: googleFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure content type is correct
        },
      });
      console.log(res);
      var emailBody = "Name: " + values.name + "\n\n";
      emailBody += "Email: " + values.email + "\n\n";
      emailBody += "Phone Number: " + values.phone + "\n\n";

      if (sourceName) {
        emailBody += "Source: " + sourceName + "\n\n";
      }

      // Construct the request payload
      var payload = {
        to: "ceo@boostmysites.com",
        subject: "Form Submission - Boostmysites E-Book Lead",
        body: emailBody,
      };

      // setIsLoading(true);
      await fetch("https://smtp-api-tawny.vercel.app/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.error) {
            toast.error(res.error);
          } else {
            toast.success("Email sent successfully");
            setIsFormSubmit(true);
            reset();
          }
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSpinner(false);
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 mt-3 text-white"
      >
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm">
            Name
          </label>
          <input
            type="text"
            className="outline-none p-2 rounded-md border text-black"
            {...register("name", {
              required: "Name is required",
              validate: (val) => {
                if (val.trim() !== "") {
                  return true;
                } else {
                  return "Name is required";
                }
              },
            })}
          />
          <small className="text-red-600">{errors.name?.message}</small>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm">
            Email
          </label>
          <input
            type="email"
            className="outline-none p-2 rounded-md border text-black"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                message: "Please enter a valid email",
              },
            })}
          />
          <small className="text-red-600">{errors.email?.message}</small>
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="text-sm">
            Phone
          </label>
          <input
            type="tel"
            className="outline-none p-2 rounded-md border text-black"
            {...register("phone", {
              required: "Phone is required",
              pattern: {
                value: /^[1-9]\d{9}$/i,
                message: "Please enter a valid phone number",
              },
            })}
          />
          <small className="text-red-600">{errors.phone?.message}</small>
        </div>
        <button type="submit" className="primary-btn1 mt-3">
          {spinner ? "Sending..." : "Submit"}
        </button>
      </form>
      {isFormSubmit && (
        <div className="w-full flex justify-center">
          <button
            onClick={() => (window.location.href = "https://boostmysites.net/")}
            className="primary-btn mt-6 mx-auto"
          >
            Visit Our Landingpage
          </button>
        </div>
      )}
    </div>
  );
};

export default EbookForm;
