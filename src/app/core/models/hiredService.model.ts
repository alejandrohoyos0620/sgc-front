import { Customer } from './customer.model';
import { Device } from './device.model';
import { Employee } from './employee.model';
import { Service } from './service.model';

export interface hiredService {
    id: number;
    service: Partial<Service>;
    device: Device;
    customer: Partial<Customer>;
    repairman: Partial<Employee>;
    status: string;
    type: string;
    createdAt: string;
    hour: string;
    date: string;
    description: string;
    rating: {
        id: number,
        score: number,
        commentary: string,
        hiredServiceId: number
    }
}
