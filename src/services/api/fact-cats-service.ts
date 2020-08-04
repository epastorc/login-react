import ApiGeneric  from './api.service';
import { FactCat } from 'DashboardModels';

export async function getFatCat(): Promise<FactCat[]> {
        const api = new ApiGeneric('https://cat-fact.herokuapp.com/facts/');
        const route = 'random?animal_type=cat&amount=7';
        const data = await api.request.get(route);
        return data.data as FactCat[];
}
