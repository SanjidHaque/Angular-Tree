import { Injectable } from '@angular/core';
import {Root} from '../models/root.model';

@Injectable({
  providedIn: 'root'
})
export class TreeService {
  roots: Root[]= [];
}
