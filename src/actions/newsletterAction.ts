import axios from "axios";
import { type ActionFunctionArgs, redirect } from "react-router-dom";
import { toast } from "react-toastify";

const newsletterUrl = "https://www.course-api.com/cocktails-newsletter";

export const newsletterAction = async ({ request }: ActionFunctionArgs) => {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    const { data: respData } = await axios.post(newsletterUrl, data);
    toast.success(respData.msg);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
    console.error(error);
  }

  return redirect("/");
};
