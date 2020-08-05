import { FactAnimal } from 'DashboardModels';

import ApiGeneric  from './api.service';
import { URL_API_FACT_CAT } from './api.constants';

 class FactAnimalApi extends  ApiGeneric{
       
        constructor() {
            super(URL_API_FACT_CAT);
        }
    
        async getFactCat(): Promise<FactAnimal[]> {
                const route = 'random?animal_type=cat&amount=7';
                const data = await this.request.get(route);
                return data.data as FactAnimal[];
        }

        async getFactDog(): Promise<FactAnimal[]> {
                const route = 'random?animal_type=dog&amount=7';
                const data = await this.request.get(route);
                return data.data as FactAnimal[];
        }
    
    }
    
    export default new FactAnimalApi();