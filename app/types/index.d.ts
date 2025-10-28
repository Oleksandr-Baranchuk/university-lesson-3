declare global {
  type TTeacherContact = {
    type: 'zoom' | 'googleMeet';
    id?: string;
    pass?: string;
    link?: string;
  };

  type TTeacher = {
    firstName: string;
    lastname: string;
    middleName: string;
    contacts: TTeacherContact[];
  };
}

export {};
