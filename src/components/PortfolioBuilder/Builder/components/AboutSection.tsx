// src/components/Portfolio/PersonalInfoForm.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { setPersonalInfo } from '@/redux/slices/portfolioSlice';
import { useFormik } from 'formik';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

const PersonalInfoForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const portfolio = useSelector((state: RootState) => state.portfolio);

  const formik = useFormik({
    initialValues: {
      name: portfolio.personalInfo.name,
      bio: portfolio.personalInfo.bio,
      location: portfolio.personalInfo.location,
    },
    onSubmit: (values) => {
      dispatch(setPersonalInfo(values)); // Update portfolio state
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="flex flex-col space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          className="input input-bordered w-full"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="bio" className="text-sm font-medium text-gray-700">Bio</label>
        <Textarea
          id="bio"
          name="bio"
          value={formik.values.bio}
          onChange={formik.handleChange}
          className="textarea textarea-bordered w-full"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="location" className="text-sm font-medium text-gray-700">Location</label>
        <Input
          id="location"
          name="location"
          type="text"
          value={formik.values.location}
          onChange={formik.handleChange}
          className="input input-bordered w-full"
        />
      </div>

      <Button type="submit" variant="default" className="w-full mt-4">Save</Button>
    </form>
  );
};

export default PersonalInfoForm;
