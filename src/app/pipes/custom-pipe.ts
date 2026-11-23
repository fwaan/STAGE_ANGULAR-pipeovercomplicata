import { Pipe, PipeTransform } from "@angular/core";

export type CriteriFiltro<T> = Partial<Record<keyof T, string | number | null | undefined>>;

@Pipe({
    name: 'filtroGenerico',
    standalone: true
})
export class FiltroGenericoPipe implements PipeTransform{
    transform<T extends object>(
        items: T[] | null | undefined,
        filtri: CriteriFiltro<T> | null | undefined
    ): T[] {
        if(!items || !items.length) {
            return [];
        }
        if(!filtri){
            return items;
        }

        const chiaviAttive = (Object.keys(filtri) as (keyof T)[]).filter((chiave) => {
            const valore = filtri[chiave];
            return valore !== null && valore !== undefined && String(valore).trim() !== '';
        });
        if(!chiaviAttive.length){
            return items;
        }

        return items.filter((item) => chiaviAttive.every((chiave) => {
            const criterio = filtri[chiave];
            const valoreItem = item[chiave];

            if (valoreItem === null || valoreItem === undefined) {
                return false;
            }
            if (typeof criterio === 'number' && !Number.isNaN(criterio)) {
                return Number(valoreItem) === criterio;
            }

            return String(valoreItem)
                .toLowerCase()
                .includes(String(criterio).toLowerCase().trim());
        }))
    }
}