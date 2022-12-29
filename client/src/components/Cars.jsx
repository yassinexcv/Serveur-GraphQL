
import {useQuery }  from '@apollo/client'
import { GET_CARS } from '../queries/carQueries';
import CarRow from './CarRow';





export default function Cars( ) {
    

    
    const {loading, error, data} = useQuery(GET_CARS)

                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error </p>;

  return (
   

    <>
        {!loading && !error && (

        <div class="overflow-x-auto relative">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead  class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th class="px-4 py-2">Nice classification</th>
                        <th class="px-4 py-2">Number</th>
                        <th class="px-4 py-2">Brand name</th>
                        <th class="px-4 py-2">Designation</th>
                        <th class="px-4 py-2">Status</th>
                        <th class="px-4 py-2">Office</th>
                        <th class="px-4 py-2">IPR</th>
                        <th class="px-4 py-2">Owner</th>
                        <th class="px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.cars.map((car) => (
                        <tr>
                            <td class="border px-4 py-2">{car.Nice_classification}</td>
                            <td class="border px-4 py-2">{car.Number}</td>
                            <td class="border px-4 py-2">{car.Brand_name}</td>
                            <td class="border px-4 py-2">{car.Designation}</td>
                            <td class="border px-4 py-2">{car.Status}</td>
                            <td class="border px-4 py-2">{car.Office}</td>
                            <td class="border px-4 py-2">{car.IPR}</td>
                            <td class="border px-4 py-2">{car.Owner}</td>
                            <td class="border px-4 py-2">
                                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Edit
                                </button>
                                <button   class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={deleteCar}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))} */}
                    {data.cars.map((car) => (
                        <CarRow key={car.id} car={car} />
                    ))}
                </tbody>
            </table>
        </div>


                        


        )}


    </>
  )
    
  
}
