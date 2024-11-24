// src/components/PortfolioBuilder/Builder/components/ContactSection.tsx

import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { setContactInfo } from '@/redux/slices/portfolioSlice';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const ContactSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const contactInfo = useSelector((state: RootState) => state.portfolio.contactInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(setContactInfo({ [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 p-4"
    >
      <div className="flex flex-col space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
        <Input
          id="email"
          name="email"
          value={contactInfo.email || ''}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone</label>
        <Input
          id="phone"
          name="phone"
          value={contactInfo.phone || ''}
          onChange={handleChange}
          placeholder="Your Phone Number"
          className="w-full"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
        <Textarea
          id="message"
          name="message"
          value={contactInfo.message || ''}
          onChange={handleChange}
          placeholder="Your Message"
          className="w-full min-h-[100px]"
        />
      </div>
    </motion.div>
  );
};

export default ContactSection;
