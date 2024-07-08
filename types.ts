export interface Patient {
    firstName: string;
    surname: string;
    middleName?: string;
    dob: string;
    address: string;
    registrationDate: string;
    matriculationNumber: string;
  }
  
  export interface ClinicalRecord {
    clinicDate: string;
    ailment: string;
    medicine?: string;
    procedure?: string;
    nextAppointment?: string;
  }
  