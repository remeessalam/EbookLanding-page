import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { SpinnerContext } from "./EbookSpinnerContext";
import toast from "react-hot-toast";

const sources = ["LinkedIn", "Twitter", "Meta"];

const FormSection = ({ emailIdToSendMail, sourceName }) => {
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
        // first one "https://script.google.com/macros/s/AKfycbxB01P65tI2n7WAJpd_4aHJyJV5OBKCnNl8fAmDGKebrs9F51WTPBe9B3g_I2VYvFI/exec";
        // second one "https://script.google.com/a/macros/boostmysites.com/s/AKfycby1Us-7Kh2gIByHzHKTmG4zGC-dbg4GQGbhyT4B5Pzz-ioylL_eazeKlVJhnqat_Y4/exec";
        // "https://script.google.com/macros/s/AKfycbwy4zrx09tgOiHPlW-lHSHNmeKFbRwhR8z4DzaMlycBpnYsFaPQOtzTycOBNKnj_szK/exec";
        // Construct URLSearchParams instead of FormData
        // "https://script.google.com/macros/s/AKfycbxm_Mc4_LJ3O55X2mmdFrFPAKxMUHUcLOunp1Ay08OoQfClnse0wAUBu_FllxsquZm-/exec";
        "https://script.google.com/macros/s/AKfycbw106fWm_XhebRaRXcpgMLQ5qY74ZDBQ6SbATdj9M1XCOqZi2k6dj10iSO2t1YBlCE/exec";
      // "https://script.google.com/macros/s/AKfycbwOczpsQ5_r6csympLPUhgB6jg014oK-Gizos2MBOEJGoNHYDFztLMy5sYsc6Q69EYl/exec";
      const googleFormData = new URLSearchParams();
      googleFormData.append("NAME", values.name);
      googleFormData.append("EMAILID", values.email);
      googleFormData.append("WHATSAPP", "91" + values.phone);
      const pabbly = new URLSearchParams();
      pabbly.append("name", values.name);
      pabbly.append("email", values.email);
      pabbly.append("whatsapp", "91" + values.phone);

      // Send POST request with the correct headers
      const res = await fetch(googleFormURL, {
        method: "POST",
        body: googleFormData,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded", // Ensure content type is correct
        },
        redirect: "follow",
      });
      const res2 = await fetch(
        // "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNTA0Mzc1MjZmNTUzMzUxMzAi_pc",
        // "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNTA0MzE1MjZlNTUzYzUxMzIi_pc",
        "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjYwNTZmMDYzNTA0MzE1MjZlNTUzYzUxMzIi_pc",

        {
          method: "POST",
          body: pabbly,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded", // Ensure content type is correct
          },
        }
      );
      console.log(res2, res);
      var emailBody = "Name: " + values.name + "\n\n";
      emailBody += "Email: " + values.email + "\n\n";
      emailBody += "Phone Number: " + values.phone + "\n\n";

      if (sourceName) {
        emailBody += "Source: " + sourceName + "\n\n";
      }

      // Construct the request payload
      var payload = {
        to: "ceo@boostmysites.com",
        // to: "remeesreme4u@gmail.com",
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
            toast.success("Form submitted successfully");
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
    <div className="mt-[4rem] py-[3rem] text-white">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex flex-col h-full justify-start gap-2">
          <h3 className="text-3xl font-medium leading-tight">
            Where Innovation Meets Intelligence: AI Solutions for the Future -{" "}
            <span className="text-primary">
              Start Your Own AI Company with Boostmysite
            </span>
          </h3>
          <p className="text-white/80 font-light mt-3">
            Starting your own AI company with support from BoostMySites could be
            a powerful approach to establish a strong online presence right from
            the beginning. By leveraging BoostMySites for website design, you
            can create a sleek, professional site that showcases your AI
            solutions, services, and mission. With a well-structured, visually
            appealing website, you can highlight your expertise in AI-driven
            technology, showcase case studies, and provide clients with clear,
            compelling calls to action. BoostMySites can also help ensure the
            website is optimized for SEO, user engagement, and lead conversion,
            making it easier to reach potential clients, investors, and partners
            as you grow your AI company.
          </p>
        </div>
        <div className="rounded-lg p-5 bg-white text-black">
          <h4 className="text-xl font-medium">
            Ready to start your AI company?
          </h4>
          <p className="text-sm text-black/70 mt-1">
            Fill out the form and let our team build it for you.
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 mt-3"
          >
            <div className="flex flex-col">
              <label htmlFor="" className="text-sm">
                Name
              </label>
              <input
                type="text"
                className="outline-none p-2 rounded-md border"
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
                className="outline-none p-2 rounded-md border"
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
                className="outline-none p-2 rounded-md border"
                {...register("phone", {
                  required: "Phone is required",
                  pattern: {
                    value: /^[1-9]\d{9}$/i,
                    message:
                      "Enter a valid 10-digit phone number without special characters.",
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
                onClick={() =>
                  (window.location.href = "https://boostmysites.net/")
                }
                className="primary-btn mt-6 mx-auto"
              >
                Visit Our Landingpage
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormSection;
