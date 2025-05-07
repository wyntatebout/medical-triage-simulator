
import { Achievement, Case, UserStats } from "@/types";

export const cases: Case[] = [
  {
    id: 1,
    caseNumber: 1,
    totalCases: 5,
    difficulty: "Moderate",
    patientInfo: {
      name: "Ms. Rivera",
      age: 58,
      bmi: 34,
      chiefComplaint: "Blurred Vision",
      additionalInfo: {
        "HbA1c": "9.8%"
      }
    },
    vitalSigns: [
      {
        name: "BP",
        value: "138/85",
        unit: "mmHg",
        isAbnormal: false
      },
      {
        name: "HR",
        value: 88,
        unit: "bpm",
        isAbnormal: false
      },
      {
        name: "Temp",
        value: 98.6,
        unit: "°F",
        isAbnormal: false
      },
      {
        name: "RR",
        value: 18,
        unit: "bpm",
        isAbnormal: false
      },
      {
        name: "O2 Sat",
        value: "98%",
        unit: "",
        isAbnormal: false
      }
    ],
    description: "Ms. Rivera presents with complaints of progressive blurred vision over the past two weeks. She reports no pain but mentions frequent urination and increased thirst. She has a history of gestational diabetes 20 years ago but states she has not had any follow-up since. Physical exam reveals mild non-proliferative retinopathy. Her HbA1c is significantly elevated at 9.8%.",
    decisions: [
      {
        id: "A",
        text: "Reassure the patient that blurred vision can be common with age and recommend follow-up with an ophthalmologist within 2-3 months.",
        isCorrect: false,
        explanation: "This response delays appropriate care for what appears to be diabetic retinopathy with significantly elevated blood glucose. The high HbA1c indicates poorly controlled diabetes requiring immediate intervention.",
        protocol: "ADA guidelines recommend urgent ophthalmological referral for patients with diabetic retinopathy and immediate glucose control measures."
      },
      {
        id: "B",
        text: "Order an urgent retinal exam and start the patient on insulin therapy while providing diabetes education.",
        isCorrect: true,
        explanation: "This is the correct approach. The patient has clear signs of uncontrolled diabetes with end-organ damage (retinopathy). Immediate insulin therapy is indicated with HbA1c > 9%, along with urgent eye evaluation.",
        protocol: "Per ADA Standards of Care, HbA1c > 9% with symptoms and evidence of complications may warrant insulin therapy. Ophthalmologic evaluation should occur within 2 weeks for symptomatic visual changes."
      },
      {
        id: "C",
        text: "Prescribe oral anti-diabetic medication and schedule routine follow-up in one month.",
        isCorrect: false,
        explanation: "While initiating pharmacological treatment is appropriate, oral agents alone may be insufficient given the significantly elevated HbA1c and presence of retinopathy. The eye findings warrant more urgent follow-up.",
        protocol: "ADA guidelines suggest that initial treatment with oral agents alone is typically for patients with HbA1c < 9% without symptoms or complications."
      },
      {
        id: "D",
        text: "Refer to endocrinology for consultation and continue monitoring vision changes.",
        isCorrect: false,
        explanation: "While endocrinology referral is reasonable, this approach delays immediate treatment that should be initiated. The vision changes represent an urgent condition requiring more immediate intervention.",
        protocol: "Clinical guidelines indicate that when diabetic retinopathy is present, prompt intervention should not be delayed while waiting for specialty consultation."
      }
    ]
  },
  {
    id: 2,
    caseNumber: 2,
    totalCases: 5,
    difficulty: "Hard",
    patientInfo: {
      name: "Mr. Johnson",
      age: 62,
      bmi: 29,
      chiefComplaint: "Chest Pain",
      additionalInfo: {
        "Prior MI": "Yes - 3 years ago",
        "Smoker": "Yes - 30 pack years"
      }
    },
    vitalSigns: [
      {
        name: "BP",
        value: "145/90",
        unit: "mmHg",
        isAbnormal: true
      },
      {
        name: "HR",
        value: 95,
        unit: "bpm",
        isAbnormal: true
      },
      {
        name: "Temp",
        value: 98.2,
        unit: "°F",
        isAbnormal: false
      },
      {
        name: "RR",
        value: 20,
        unit: "bpm",
        isAbnormal: false
      },
      {
        name: "O2 Sat",
        value: "97%",
        unit: "",
        isAbnormal: false
      }
    ],
    description: "Mr. Johnson presents with substernal chest pressure that began 45 minutes ago while watching TV. He describes it as 'heavy pressure' radiating to his left arm. He took one nitroglycerin tablet which provided minimal relief. He is diaphoretic and anxious. His 12-lead ECG shows 2mm ST-elevation in leads II, III, and aVF.",
    decisions: [
      {
        id: "A",
        text: "Order cardiac enzymes and serial ECGs, start aspirin, and admit to observation unit for monitoring.",
        isCorrect: false,
        explanation: "This approach delays necessary intervention for what appears to be an acute ST-elevation myocardial infarction (STEMI) which requires immediate reperfusion therapy.",
        protocol: "ACC/AHA guidelines recommend immediate reperfusion for STEMI, with a door-to-balloon time goal of 90 minutes or less."
      },
      {
        id: "B",
        text: "Administer aspirin, heparin, and nitroglycerin, and consult cardiology for possible stress test tomorrow.",
        isCorrect: false,
        explanation: "This significantly delays appropriate care for a STEMI. The patient's ECG clearly shows ST-elevation indicating a need for immediate reperfusion, not delayed testing.",
        protocol: "For STEMI patients, stress testing is inappropriate and potentially dangerous. Guidelines recommend immediate activation of the cardiac catheterization lab."
      },
      {
        id: "C",
        text: "Activate cardiac catheterization lab, administer loading doses of aspirin and P2Y12 inhibitor, and start anticoagulation.",
        isCorrect: true,
        explanation: "This is the correct approach for a patient with STEMI. Immediate reperfusion via primary PCI is the standard of care, along with appropriate antiplatelet and anticoagulant therapy.",
        protocol: "ACC/AHA guidelines state that primary PCI is the preferred reperfusion strategy when it can be performed within 90 minutes of first medical contact by an experienced team."
      },
      {
        id: "D",
        text: "Administer thrombolytics immediately, then transfer to a tertiary care center.",
        isCorrect: false,
        explanation: "While thrombolytics can be appropriate if PCI is not available within 120 minutes, this scenario doesn't indicate that PCI is unavailable or delayed, making primary PCI the preferred strategy.",
        protocol: "Fibrinolytic therapy is a Class I recommendation if there is anticipated delay to primary PCI, but primary PCI remains the preferred strategy when available in a timely manner."
      }
    ]
  },
  {
    id: 3,
    caseNumber: 3,
    totalCases: 5,
    difficulty: "Easy",
    patientInfo: {
      name: "Toddler Green",
      age: 3,
      chiefComplaint: "Fever and Rash",
      additionalInfo: {
        "Vaccination": "Up to date",
        "Duration of Fever": "3 days"
      }
    },
    vitalSigns: [
      {
        name: "BP",
        value: "95/60",
        unit: "mmHg",
        isAbnormal: false
      },
      {
        name: "HR",
        value: 110,
        unit: "bpm",
        isAbnormal: false
      },
      {
        name: "Temp",
        value: 101.3,
        unit: "°F",
        isAbnormal: true
      },
      {
        name: "RR",
        value: 24,
        unit: "bpm",
        isAbnormal: false
      },
      {
        name: "O2 Sat",
        value: "99%",
        unit: "",
        isAbnormal: false
      }
    ],
    description: "3-year-old presents with a 3-day history of fever up to 102°F and a diffuse, maculopapular rash that began on the face and spread to the trunk and extremities. The child is irritable but consolable, with good hydration status and no respiratory distress. There is mild conjunctival injection without exudate. The rash blanches with pressure.",
    decisions: [
      {
        id: "A",
        text: "Administer IV antibiotics immediately for suspected meningococcemia.",
        isCorrect: false,
        explanation: "This is too aggressive for the clinical presentation. The child is well-appearing with a blanching rash and no signs of sepsis or meningitis. Meningococcemia typically presents with a petechial/purpuric non-blanching rash and more significant systemic symptoms.",
        protocol: "Emergency antibiotics are indicated for suspected meningococcemia, but the clinical picture here is not consistent with this diagnosis."
      },
      {
        id: "B",
        text: "Diagnose as viral exanthem, recommend supportive care with antipyretics and hydration, and follow up if symptoms worsen.",
        isCorrect: true,
        explanation: "This is the most appropriate approach. The presentation is classic for a viral exanthem with fever, blanching maculopapular rash, and an otherwise well-appearing, vaccinated child. Supportive care is the standard approach.",
        protocol: "Management of viral exanthems in well-appearing children includes symptomatic treatment and monitoring for complications or worsening symptoms."
      },
      {
        id: "C",
        text: "Order CBC, blood culture, and lumbar puncture to rule out meningitis.",
        isCorrect: false,
        explanation: "This is unnecessarily invasive for the clinical presentation. The child is well-appearing with no signs of meningismus or sepsis, making lumbar puncture and blood cultures inappropriate first steps.",
        protocol: "Per pediatric guidelines, lumbar puncture is not routinely indicated in well-appearing children with fever and rash who have no signs of meningeal irritation."
      },
      {
        id: "D",
        text: "Prescribe oral antibiotics for possible scarlet fever.",
        isCorrect: false,
        explanation: "There are no features suggesting streptococcal infection such as pharyngitis, strawberry tongue, or circumoral pallor. Empiric antibiotics are not indicated without evidence of bacterial infection.",
        protocol: "Diagnosis of scarlet fever typically requires confirmation of group A streptococcal infection, usually with pharyngitis, which is not described in this case."
      }
    ]
  },
  {
    id: 4,
    caseNumber: 4,
    totalCases: 5,
    difficulty: "Moderate",
    patientInfo: {
      name: "Mrs. Williams",
      age: 72,
      bmi: 26,
      chiefComplaint: "Sudden Confusion",
      additionalInfo: {
        "History": "Hypertension, Atrial Fibrillation",
        "Medications": "Warfarin, Lisinopril"
      }
    },
    vitalSigns: [
      {
        name: "BP",
        value: "168/92",
        unit: "mmHg",
        isAbnormal: true
      },
      {
        name: "HR",
        value: 82,
        unit: "bpm",
        isAbnormal: false
      },
      {
        name: "Temp",
        value: 98.8,
        unit: "°F",
        isAbnormal: false
      },
      {
        name: "RR",
        value: 16,
        unit: "bpm",
        isAbnormal: false
      },
      {
        name: "O2 Sat",
        value: "96%",
        unit: "",
        isAbnormal: false
      }
    ],
    description: "Mrs. Williams was brought to the ED by her daughter after developing sudden confusion and slurred speech 90 minutes ago. The daughter reports her mother was previously at her baseline mental status. On exam, the patient has mild right facial droop, slurred speech, and right arm weakness (NIHSS score 7). Last known INR was 1.8 two weeks ago.",
    decisions: [
      {
        id: "A",
        text: "Obtain immediate non-contrast head CT and check INR; if no contraindications, administer IV thrombolysis.",
        isCorrect: true,
        explanation: "This is the correct approach for a patient presenting with acute stroke symptoms within the time window for thrombolysis. Immediate imaging is essential to rule out hemorrhage before considering IV thrombolysis.",
        protocol: "AHA/ASA guidelines recommend IV alteplase for patients who can be treated within 3-4.5 hours of symptom onset, after exclusion of intracranial hemorrhage and other contraindications."
      },
      {
        id: "B",
        text: "Order MRI brain to evaluate for stroke, then consult neurology for management recommendations.",
        isCorrect: false,
        explanation: "While MRI provides more detailed information, it takes longer to obtain than CT and would delay potential thrombolysis. Time is critical in acute stroke, and non-contrast CT is the recommended first imaging modality.",
        protocol: "Guidelines specify that non-contrast CT should be obtained within 25 minutes of arrival for suspected stroke patients, with MRI as an option only if it doesn't delay treatment."
      },
      {
        id: "C",
        text: "Start aspirin and admit for observation and neurology consultation in the morning.",
        isCorrect: false,
        explanation: "This significantly delays appropriate care for a potential acute ischemic stroke. The patient is within the time window for thrombolysis, which should be considered immediately.",
        protocol: "Aspirin alone is insufficient for acute management of stroke symptoms within the thrombolytic window. Delaying evaluation until morning could result in significant preventable neurological damage."
      },
      {
        id: "D",
        text: "Immediately consult neurosurgery for possible decompressive surgery.",
        isCorrect: false,
        explanation: "This is premature without imaging to determine if there is a stroke, its type, or any mass effect requiring surgical intervention. The NIHSS score of 7 suggests moderate stroke severity, not necessarily requiring neurosurgical intervention.",
        protocol: "Decompressive surgery is considered for large territory strokes with significant edema and mass effect, not as a first-line approach before imaging confirmation of stroke type."
      }
    ]
  },
  {
    id: 5,
    caseNumber: 5,
    totalCases: 5,
    difficulty: "Hard",
    patientInfo: {
      name: "Mr. Davis",
      age: 45,
      bmi: 32,
      chiefComplaint: "Severe Abdominal Pain",
      additionalInfo: {
        "Last Meal": "6 hours ago",
        "Pain Scale": "9/10"
      }
    },
    vitalSigns: [
      {
        name: "BP",
        value: "110/70",
        unit: "mmHg",
        isAbnormal: false
      },
      {
        name: "HR",
        value: 118,
        unit: "bpm",
        isAbnormal: true
      },
      {
        name: "Temp",
        value: 101.2,
        unit: "°F",
        isAbnormal: true
      },
      {
        name: "RR",
        value: 22,
        unit: "bpm",
        isAbnormal: false
      },
      {
        name: "O2 Sat",
        value: "95%",
        unit: "",
        isAbnormal: false
      }
    ],
    description: "Mr. Davis presents with severe, diffuse abdominal pain that began suddenly 5 hours ago. He reports the pain is constant and radiates to his back. He is diaphoretic and appears ill. On exam, his abdomen is rigid with guarding and rebound tenderness. Bowel sounds are diminished. He has not passed stool since yesterday and denies nausea or vomiting.",
    decisions: [
      {
        id: "A",
        text: "Order abdominal X-ray and nasogastric tube placement, start IV fluids and pain management.",
        isCorrect: false,
        explanation: "This approach is insufficient for the clinical presentation, which strongly suggests peritonitis possibly due to perforation. Abdominal X-ray has limited sensitivity and may delay appropriate care.",
        protocol: "For suspected peritonitis, EAST guidelines recommend CT imaging as the preferred initial study, not plain radiographs."
      },
      {
        id: "B",
        text: "Initiate broad-spectrum antibiotics, order abdominal CT with contrast, and consult surgery.",
        isCorrect: true,
        explanation: "This is the most appropriate approach for suspected peritonitis. The patient shows signs of systemic inflammatory response and has a rigid abdomen with rebound tenderness, suggesting peritoneal irritation potentially from perforation or severe infection.",
        protocol: "Per EAST and ACS guidelines, patients with suspected peritonitis should receive prompt fluid resuscitation, broad-spectrum antibiotics, and surgical evaluation with appropriate imaging, typically CT scan."
      },
      {
        id: "C",
        text: "Begin PPI infusion, order abdominal ultrasound, and admit to medicine for observation.",
        isCorrect: false,
        explanation: "This approach is inadequate for likely peritonitis. Ultrasound may not identify free air from perforation, and admission without surgical evaluation could critically delay needed intervention.",
        protocol: "Guidelines recommend prompt surgical evaluation for patients with peritoneal signs, not medical management alone."
      },
      {
        id: "D",
        text: "Administer pain medication and anti-emetics, obtain labs, and reassess in 2 hours.",
        isCorrect: false,
        explanation: "This dangerously delays care for a patient with signs of peritonitis who requires immediate intervention. The rigid abdomen, fever, and tachycardia suggest a serious surgical emergency.",
        protocol: "Observation without appropriate imaging and surgical consultation is contraindicated in patients with peritonitis, as delayed intervention is associated with increased morbidity and mortality."
      }
    ]
  }
];

export const initialAchievements: Achievement[] = [
  {
    id: "first_case",
    title: "First Response",
    description: "Complete your first triage case",
    icon: "🏆",
    unlocked: false
  },
  {
    id: "perfect_score",
    title: "Perfect Diagnosis",
    description: "Achieve 100% correct answers in a session",
    icon: "🌟",
    unlocked: false
  },
  {
    id: "time_master",
    title: "Speed Demon",
    description: "Complete a case in under 30 seconds",
    icon: "⚡",
    unlocked: false
  },
  {
    id: "streak_3",
    title: "On a Roll",
    description: "Get 3 correct answers in a row",
    icon: "🔥",
    unlocked: false
  },
  {
    id: "hard_case",
    title: "Expert Clinician",
    description: "Correctly solve a hard difficulty case",
    icon: "🧠",
    unlocked: false
  }
];

export const initialStats: UserStats = {
  totalCases: 0,
  correctDecisions: 0,
  averageTime: 0,
  streak: 0
};
