import { useMutation } from "@apollo/client"
import { DELETE_CAR } from "../mutations/carMutations"




export default function CarRow({car}) {

    const [deleteCar] = useMutation(DELETE_CAR, {
        variables : { id: car.id },
    });


  return (
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
            
            <button   class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={deleteCar}>
                Delete
            </button>
        </td>
    </tr>
  )
}
