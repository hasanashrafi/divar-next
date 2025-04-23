import Header from '../components/Header';
import CategoryList from '../components/CategoryList';
import CitiesList from '../components/CitiesList';

export default function Home() {
  return (
    <div className="  mx-auto  ">
      <Header />
      <div className="max-w-7xl mx-auto mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Sidebar */}
        <div className="lg:col-span-3">
          <CategoryList />
        </div>
        {/* Main Content */}
        <div className="lg:col-span-9">
          <CitiesList />
          {/* Add listing grid here */}
        </div>
      </div>
    </div>
  );
} 