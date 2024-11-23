import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '@/redux/store';
import { setHeaderInfo } from '@/redux/slices/portfolioSlice';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { motion } from 'framer-motion';

const HeaderSection = () => {
  const dispatch = useDispatch<AppDispatch>();
  const headerInfo = useSelector((state: RootState) => state.portfolio.headerInfo);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    dispatch(setHeaderInfo({ [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6 p-4"
    >
      <div className="flex flex-col space-y-2">
        <label htmlFor="title" className="text-sm font-medium text-gray-700">Title</label>
        <Input
          id="title"
          name="title"
          value={headerInfo.title || ''}
          onChange={handleChange}
          placeholder="Portfolio Title"
          className="w-full"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="subtitle" className="text-sm font-medium text-gray-700">Subtitle</label>
        <Input
          id="subtitle"
          name="subtitle"
          value={headerInfo.subtitle || ''}
          onChange={handleChange}
          placeholder="Your Role or Tagline"
          className="w-full"
        />
      </div>

      <div className="flex flex-col space-y-2">
        <label htmlFor="description" className="text-sm font-medium text-gray-700">Description</label>
        <Textarea
          id="description"
          name="description"
          value={headerInfo.description || ''}
          onChange={handleChange}
          placeholder="Brief description or introduction"
          className="w-full min-h-[100px]"
        />
      </div>
    </motion.div>
  );
};

export default HeaderSection;