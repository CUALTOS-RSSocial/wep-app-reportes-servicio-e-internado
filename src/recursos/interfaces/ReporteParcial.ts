/* eslint-disable linebreak-style */

import ActividadesRealizadas from './ActividadesRealizadas';
import AtencionesRealizadas from './AtencionesRealizadas';

/* eslint-disable semi */
export default interface ReporteParcial {
    id: number;
    idServicio: number;
    idTrimestre: number;
    actualizado: string;
    actividadesRealizadas: ActividadesRealizadas[];
    atencionesRealizadas: AtencionesRealizadas[];
}
